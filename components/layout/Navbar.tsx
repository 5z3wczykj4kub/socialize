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
  Row,
  Typography,
} from 'antd';
import Link from 'next/link';
import styles from './Navbar.module.less';

const { Header } = Layout;

const { Text } = Typography;

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
        label: 'Sign out',
        icon: <LogoutOutlined />,
        key: 'signOut',
      },
    ]}
  />
);

const Navbar = () => {
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

export default Navbar;
