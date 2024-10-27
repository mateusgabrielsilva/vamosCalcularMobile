import axios from 'axios';

// URL base da sua API
const API_URL = "https://vamos-calcular-backend.vercel.app/api";

// Função para criar usuario
export async function createUsers(userData) {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

// Função de login
export async function loginUser(loginData) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    return response;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    throw error;
  }
}

// Função para buscar usuários
export async function getUser(userId) {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
}
