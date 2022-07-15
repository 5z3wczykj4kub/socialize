import { Card, Col, Layout, Row } from 'antd';
import type { NextPage } from 'next';
import LoginForm from '../../components/forms/LoginForm';
import Navbar from '../../components/layout/Navbar';
import { withSessionSsr } from '../../lib/session';
import styles from './index.module.less';

const getServerSideProps = withSessionSsr(async ({ req }) => {
  const { user } = req.session;

  if (user)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
});

const Home: NextPage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Navbar.Empty />
      <Content className={styles.content}>
        <Row justify='center'>
          <Col span={24}>
            <Card className={styles.card} title='Login'>
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export { getServerSideProps };

export default Home;
