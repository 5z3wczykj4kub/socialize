import { HomeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import React, { useState } from 'react';
import showErrorMessages from '../../lib/functions/showErrorMessages';
import { IRegisterFormValues } from '../../pages/api/register';
import styles from './RegisterForm.module.less';

const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm<IRegisterFormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values: IRegisterFormValues) => {
    const payload = {
      ...values,
      dateOfBirth: moment(values.dateOfBirth).format('YYYY-MM-DD'),
    };
    setIsLoading(true);
    try {
      await axios.post('/api/register', payload);
    } catch (error) {
      showErrorMessages(error, 'registerMessage');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form form={form} name='register' onFinish={handleRegister}>
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
        rules={[
          {
            required: true,
            message: 'Please enter your password',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className={styles.icon} />}
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password',
          },
          ({ getFieldValue }) => ({
            validator: (_, value) =>
              !value || getFieldValue('password') === value
                ? Promise.resolve()
                : Promise.reject(new Error("Password's do not match")),
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className={styles.icon} />}
          placeholder='Confirm password'
        />
      </Form.Item>
      <Form.Item
        name='gender'
        rules={[{ required: true, message: 'Please select gender' }]}
      >
        <Select placeholder='Gender'>
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
          <Option value='other'>Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='dateOfBirth'
        rules={[
          {
            required: true,
            message: 'Please enter your date of birth',
          },
        ]}
      >
        <DatePicker
          className={styles.dateOfBirth}
          placeholder='Date of birth'
          placement='bottomRight'
          disabledDate={(date) => date > moment()}
        />
      </Form.Item>
      <Form.Item
        name='residence'
        rules={[
          { required: true, message: 'Please enter your place of residence' },
        ]}
      >
        <Input
          prefix={<HomeOutlined className={styles.icon} />}
          placeholder='Residence'
        />
      </Form.Item>
      <Form.Item className={styles.submitButtonFormItem}>
        <Button
          className={styles.submitButton}
          type='primary'
          htmlType='submit'
          loading={isLoading}
        >
          Register
        </Button>
        <Link href='/login'>Already have an account? Log in!</Link>
      </Form.Item>
    </Form>
  );
};

export default App;
