import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-dev-secret-key';

type User = {
  uid?: string;
  username?: string;
  // add other user fields if needed
};

type ErrorResponse = { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user: User } | ErrorResponse>
) {
  const token = req.cookies.pi_token;

  if (!token) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as User;
    return res.status(200).json({ user: decoded });
  } catch (err: unknown) {
    return res.status(401).json({ error: 'Invalid session token' });
  }
}
