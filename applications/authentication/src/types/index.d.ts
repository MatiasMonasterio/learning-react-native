export interface UsuarioResponse {
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
}

export interface LoginData {
  correo: string;
  password: string;
}
