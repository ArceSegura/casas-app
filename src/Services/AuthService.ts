import axiosConfig from '@config/axiosConfig';

export const authentication = () => {
  const res = axiosConfig.post('/authentication');

  return res;
};