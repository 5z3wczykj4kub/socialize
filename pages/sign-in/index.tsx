import { Card, Col, Layout, Row } from 'antd';
import type { NextPage } from 'next';
import SignInForm from '../../components/forms/SignInForm';
import Navbar from '../../components/layout/Navbar';
import styles from './index.module.less';

const { Content } = Layout;

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar.Empty />
      <Content className={styles.content}>
        <Row justify='center'>
          <Col span={24}>
            <Card className={styles.card} title='Sign in'>
              <SignInForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
