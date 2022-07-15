import { message } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';

interface IError {
  errors: { message: string }[];
}

const showErrorMessages = (error: unknown, key: string) => {
  const { response } = error as AxiosError;
  const {
    data: { errors },
  } = response as AxiosResponse<IError>;
  errors.forEach((error) => message.error({ key, content: error.message }));
};

export type { IError };

export default showErrorMessages;
