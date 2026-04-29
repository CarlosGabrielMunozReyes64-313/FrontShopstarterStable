// ── Formulario de registro ──
export interface RegisterForm {
  username: string;
  password: string;
  fullName: string;
  cedula:   string;
  phone:    string;
  age:      string;
  email:    string;
}

// ── Formulario de login ──
export interface LoginForm {
  email:    string;
  password: string;
}

// ── Respuesta de la API (para cuando esté lista) ──
export interface AuthResponse {
  token:   string;
  userId:  string | number;
  message: string;
}