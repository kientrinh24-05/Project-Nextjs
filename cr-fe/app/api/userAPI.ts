import API from './RestClient';

export const getUsers = async () => {
  return API.get('https://reqres.in/api/users?page=1');
};
