import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;


const authenticate = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    const user = await getUser(res.data.data.access_token)
    await localStorage.setItem('user', JSON.stringify(user));
    await localStorage.setItem('access_token', res.data.data.access_token);
    await localStorage.setItem('refresh_token', res.data.data.refresh_token);
    return res.data.data.access_token;
  } catch (error) {
    return error;
  }
};

const getUser = async (token: string) => {
  try {
    const res = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error;
  }
};

export { authenticate, getUser };
