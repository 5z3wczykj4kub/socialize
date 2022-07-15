import {
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  message,
  Row,
  Typography,
} from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import showErrorMessages from '../../lib/functions/showErrorMessages';
import styles from './Navbar.module.less';

const { Header } = Layout;

const { Text } = Typography;

const Empty = () => {
  return (
    <Header className={styles.header}>
      <Text>Socialize</Text>
    </Header>
  );
};

const Mobile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const hide = message.loading({
        content: 'Logging out, please wait...',
        key: 'logoutMessage',
        duration: 0,
      });
      await axios.get('/api/logout');
      await router.push('/login');
      hide();
    } catch (error) {
      showErrorMessages(error, 'logoutMessage');
    }
  };

  const menu = (
    <Menu
      items={[
        {
          label: <Link href='#'>Profile</Link>,
          icon: <UserOutlined />,
          key: 'profile',
        },
        {
          label: <Link href='#'>Settings</Link>,
          icon: <SettingOutlined />,
          key: 'settings',
        },
        {
          type: 'divider',
        },
        {
          label: 'Logout',
          icon: <LogoutOutlined />,
          key: 'logout',
          onClick: handleLogout,
        },
      ]}
    />
  );

  return (
    <Header className={styles.header}>
      <Row justify='space-between' align='middle'>
        <Col>
          <Text>Socialize</Text>
        </Col>
        <Col>
          <Row gutter={10}>
            <Col>
              <Button shape='circle' icon={<SearchOutlined />} />
            </Col>
            <Col>
              <Badge count={2}>
                <Button shape='circle' icon={<BellOutlined />} />
              </Badge>
            </Col>
            <Col>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                placement='bottomRight'
              >
                <Avatar className={styles.avatar} icon={<UserOutlined />} />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default { Empty, Mobile };
