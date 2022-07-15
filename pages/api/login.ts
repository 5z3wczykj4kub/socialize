import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';

interface ILoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body as ILoginFormData;
  /**
   * TODO:
   * Get user from database.
   */
  if (email === 'j@j.com' && password === 'j') {
    req.session.user = {
      id: '1',
      email,
    };

    await req.session.save();

    return res.json({ email });
  }

  return res.status(401).json({
    errors: [
      {
        message: 'Invalid credentials',
      },
    ],
  });
};

export type { ILoginFormData };

export default withSessionRoute(login);
