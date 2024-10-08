import api from "@/http/api.js";

export const csrfToken = () => api.get("/sanctum/csrf-cookie")

export const login = (credentials) => api.post("/auth/login", credentials)

export const register = (user) => api.post("/auth/register", user)

export const logout = () => api.post("/auth/logout")

export const getUser = () => api.get("/api/user")