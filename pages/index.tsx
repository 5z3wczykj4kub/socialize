import { Layout } from 'antd';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import styles from './index.module.less';

const { Content } = Layout;

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Content className={styles.content}>Content</Content>
    </Layout>
  );
};

export default Home;
