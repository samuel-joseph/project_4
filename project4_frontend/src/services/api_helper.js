import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export const loginUser = async loginData => {
  console.log(loginData);
  const resp = await api.post("/auth/login", loginData);
  localStorage.setItem("authToken", resp.data.auth_token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem("name", resp.data.name);
  localStorage.setItem("trainername", resp.data.trainername);
  localStorage.setItem("id", resp.data.user.id);
  console.log(resp.data.user.id);
  return resp.data.user;
};

export const registerUser = async registerData => {
  const resp = await api.post("/signup", registerData);
  localStorage.setItem("authToken", resp.data.auth_token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem("authToken", resp.data.auth_token);
  localStorage.setItem("name", resp.data.user.name);
  localStorage.setItem("trainername", resp.data.user.trainername);
  localStorage.setItem("id", resp.data.user.id);
  console.log(resp);
  return resp.data.user;
};

export const verifyUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
};

export const getallPokemon = async () => {
  let resp = [];
  const data = await api.get("/pokedex");
  for (let i = 0; i <= 25; i++) {
    resp.push(data.data[i]);
  }
  return resp;
};

export const options = async () => {
  const resp = await api.get("/pokedex");
  console.log(resp);
  return resp.data;
};

export const storePoke = async postData => {
  const resp = [];
  console.log(postData);
  let pokemon = await api.post("/pokemons", postData);
  // console.log(postData.moves[0]);
  console.log(pokemon);
  console.log(pokemon.data.id);
  let moves = null;
  for (let i = 0; i < postData.moves.length; i++) {
    console.log(postData.moves[i]);
    let moves = await api.post(
      `/pokemons/${pokemon.data.id}/moves`,
      postData.moves[i]
    );
  }
  console.log("HEYOOOOO");
  console.log(pokemon.data);
  return pokemon.data.id;
};

// export const getMoves = async id => {
//   console.log(id);
//   const resp = await api.get(`/pokemons/29/moves`);
//   console.log(resp);
//   return resp.data;
// };

export const getPokemon = async id => {
  console.log(id);
  const resp = await api.get(`/pokemons/${id}`);
  console.log(resp);
  return resp.data;
};

export const update = async (id, postData) => {
  console.log(id);
  console.log(postData);
  const resp = await api.put(`/pokemons/${id}`, postData);
  console.log(resp);
  return resp.data;
};

export const remove = async id => {
  console.log(id);
  console.log("HELLOOO DELETE PLEASE");
  const resp = await api.delete(`/pokemons/${id}`);
  return resp.data;
};
