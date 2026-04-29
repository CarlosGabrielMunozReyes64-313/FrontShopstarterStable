import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Auth.module.css';
import type { LoginForm }    from '../../types/auth.types';

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

const validate = (data: FormData): Errors => {
  const e: Errors = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Correo inválido.';
  if (!data.password.trim()) e.password = 'Ingresa tu contraseña.';
  return e;
};

export default function LoginPage() {
  const [form, setForm]         = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors]     = useState<Errors>({});
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const e2 = validate(form);
    if (Object.keys(e2).length) { setErrors(e2); return; }
    // TODO: conectar con la API
    console.log('Login:', form);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit} noValidate>
        <h2 className={styles.title}>Iniciar sesión</h2>

        {/* Email */}
        <div className={styles.field}>
          <label>Correo electrónico</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        {/* Contraseña */}
        <div className={styles.field}>
          <label>Contraseña</label>
          <div className={styles.passWrap}>
            <input
              name="password"
              type={showPass ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
            <button type="button" className={styles.eye} onClick={() => setShowPass(p => !p)}>
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>

        <button type="submit" className={styles.btn}>Entrar</button>
      </form>
    </div>
  );
}