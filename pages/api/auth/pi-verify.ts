import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type UserDTO = {
  uid: string;
  username: string;
  // add any other user properties if needed
};

type ErrorResponse = { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDTO | ErrorResponse>
) {
  const auth = req.headers.authorization || '';
  const token = auth.replace(/^Bearer\s+/, '');

  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  try {
    const { data } = await axios.get<UserDTO>('https://api.minepi.com/v2/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.status(200).json(data);
  } catch (e: unknown) {
    if (e instanceof AxiosError && e.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    console.error(e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
