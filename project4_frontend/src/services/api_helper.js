import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.user.name)
  localStorage.setItem('trainername', resp.data.user.trainername)
  return resp.data.user;
}


export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
    localStorage.setItem('authToken', resp.data.auth_token)
    localStorage.setItem('name', resp.data.user.name)
    localStorage.setItem('trainername', resp.data.user.trainername)
    return resp.data.user;
  } catch (e) {
    if (e.response.status === 422) {
      return {errorMessage: "Trainername is already associated with a user, please login to"}
    }
  }
}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }
}

export const indexPokemon = async () => {
  const resp = await api.get('/Pokemon');
  return resp.data;
}


export const postPokemon = async (postData) => {
  const resp = await api.post('/Pokemon', postData)
  return resp.data
}

 
export const putPokemon = async (id, postData) => {
  const resp = await api.put(`/Pokemon/${id}`, postData);
  return resp.data
}