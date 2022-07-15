import { Button, Checkbox, Form, Input } from 'antd';
import styles from './SignInForm.module.less';

const SignInForm = () => {
  const handleSignIn = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name='signIn'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={handleSignIn}
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
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
