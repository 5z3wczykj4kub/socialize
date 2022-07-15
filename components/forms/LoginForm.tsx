import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import showErrorMessages from '../../lib/functions/showErrorMessages';
import { IUser } from '../../lib/session';
import { ILoginFormData } from '../../pages/api/login';
import styles from './LoginForm.module.less';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (values: ILoginFormData) => {
    try {
      setIsLoading(true);
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
        label='Email'
        name='email'
        rules={[
          { required: true, message: 'Please enter your email' },
          {
            type: 'email',
            message: 'Please enter correct email format',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item className={styles.submitButton}>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
