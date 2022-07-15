import { Layout } from 'antd';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import { withSessionSsr } from '../lib/session';
import styles from './index.module.less';

const getServerSideProps = withSessionSsr(async ({ req }) => {
  const { user } = req.session;

  if (!user)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      user: req.session.user,
    },
  };
});

const Home: NextPage = (props) => {
  const { Content } = Layout;

  return (
    <Layout>
      <Navbar.Mobile />
      <Content className={styles.content}>Index page</Content>
    </Layout>
  );
};

export { getServerSideProps };

export default Home;
