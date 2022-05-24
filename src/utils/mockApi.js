import axios from 'axios';

axios.defaults.baseURL = 'https://628baa157886bbbb37bd27c7.mockapi.io/api/v1/';

export const addContactApi = contact => {
  return axios
    .post('contacts', contact)
    .then(({ data }) => ({ ...contact, id: data.id }));
};

export const getContactsApi = () => {
  return axios.get('contacts').then(({ data }) => data);
};

export const removeContactApi = id => {
  return axios.delete('contacts/' + id).then(() => id);
};
