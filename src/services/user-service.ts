import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

const instance = axios.create({
    baseURL: apiUrl,
});

instance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        const refresh_token = localStorage.getItem('refresh_token');
        if (refresh_token) {
          return axios
              .post(`${apiUrl}/auth/refresh`, {
                refresh_token,
              })
              .then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                error.config.headers.Authorization = `Bearer ${res.data.access_token}`;
                return instance(error.config);
              });
        }
      }
      return Promise.reject(error);
    }
);

export const getUsers = async () => {
    try {
        const response = await instance.get('/users');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (userData: object) => {
    try {
        const response = await instance.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (userId: string, userData: object) => {
    try {
        const response = await instance.patch(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (userId: string) => {
    try {
        const response = await instance.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

