import axios from 'axios';

export default async function handler(req, res) {
  const auth = req.headers.authorization || '';
  const token = auth.replace(/^Bearer\s+/, '');

  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  try {
    const { data } = await axios.get('https://api.minepi.com/v2/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.status(200).json(data);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    console.error(e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
