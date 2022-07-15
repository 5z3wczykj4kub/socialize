import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import showErrorMessages from '../../lib/functions/showErrorMessages';
import { IUser } from '../../lib/session';
import { ILoginFormValues } from '../../pages/api/login';
import styles from './LoginForm.module.less';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (values: ILoginFormValues) => {
    setIsLoading(true);
    try {
      await axios.post<IUser>('/api/login', values);
      await router.push('/');
    } catch (error) {
      showErrorMessages(error, 'loginMessage');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      name='login'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={handleLogin}
      autoComplete='off'
    >
      <Form.Item
        name='email'
        rules={[
          { required: true, message: 'Please enter your email' },
          {
            type: 'email',
            message: 'Please enter correct email format',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className={styles.icon} />}
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input
          prefix={<LockOutlined className={styles.icon} />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item className={styles.submitButtonFormItem}>
        <Button
          className={styles.submitButton}
          type='primary'
          htmlType='submit'
          loading={isLoading}
        >
          Log in
        </Button>
        <Link href='/register'>Don't have an account? Register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
