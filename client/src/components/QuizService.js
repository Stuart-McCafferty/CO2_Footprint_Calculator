const baseURL = 'http://localhost:9000/api/users';

export const getUsers = () => {
  return fetch(baseURL)
      .then(res => res.json())
}