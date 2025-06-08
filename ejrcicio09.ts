// Paso 1: Declarar interfaz Usuario
interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  correo?: string;
}

// Paso 2: Declarar interfaz InformacionLogIn
interface InformacionLogIn {
  correo: string;
  clave: string;
  recaptcha: boolean;
}

// Paso 3: Crear variable de tipo Usuario
const usuarioActual: Usuario = {
  nombre: 'Juan Pérez',
  edad: 30,
  activo: true,
  correo: 'juan.perez@example.com'
};

// Paso 4: Implementar función loguear
function loguear(info: InformacionLogIn): void {
  const correoValido = info.correo.includes('@') && info.correo.includes('.');
  const claveValida = info.clave.length >= 6;
  const recaptchaValido = info.recaptcha === true;

  if (correoValido && claveValida && recaptchaValido) {
    console.log('Acceso permitido');
  } else {
    console.log('Datos inválidos');
  }
}

// Paso 5: Llamar función con datos de prueba
const datosLogin: InformacionLogIn = {
  correo: 'correo@example.com',
  clave: '123456',
  recaptcha: true
};

loguear(datosLogin);
