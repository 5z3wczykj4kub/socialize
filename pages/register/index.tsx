import { Card, Col, Layout, Row } from 'antd';
import type { NextPage } from 'next';
import RegisterForm from '../../components/forms/RegisterForm';
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

const Register: NextPage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Navbar.Empty />
      <Content className={styles.content}>
        <Row justify='center'>
          <Col span={24}>
            <Card className={styles.card} title='Register'>
              <RegisterForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export { getServerSideProps };

export default Register;
