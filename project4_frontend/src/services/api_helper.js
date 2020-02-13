import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp)
  localStorage.setItem('authToken', resp.data.auth_token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  console.log(resp.data.trainername)
  localStorage.setItem('name', resp.data.name)
  localStorage.setItem('trainername', resp.data.trainername)
  return resp.data.user;
}


export const registerUser = async (registerData) => {
  const resp = await api.post('/signup', registerData);
  console.log(resp)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.user.name)
  localStorage.setItem('trainername', resp.data.user.trainername)
  return resp.data.user;
}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }
}

export const indexPokemon = async () => {
  console.log("hey")
  const resp = await api.get('/pokemons');
  console.log(resp)
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