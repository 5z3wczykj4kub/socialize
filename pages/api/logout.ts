import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    req.session.destroy();
    return res.end();
  } catch (error) {
    return res.status(500).json({
      errors: [{ message: 'Something went wrong, logging out failed' }],
    });
  }
};

export default withSessionRoute(logout);
