import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Auth.module.css';

interface FormData {
  username: string;
  password: string;
  fullName: string;
  cedula: string;
  phone: string;
  age: string;
  email: string;
}

interface FormErrors Partial<FormData> {}

const PASSWORD_RULES = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.username.trim()) errors.username = 'Campo requerido';
  if (!PASSWORD_RULES.test(data.password))
    errors.password = 'Mín. 8 caracteres, mayúscula, minúscula, número y símbolo';
  if (!data.fullName.trim()) errors.fullName = 'Campo requerido';
  if (!/^\d{6,12}$/.test(data.cedula)) errors.cedula = 'Solo dígitos (6-12)';
  if (!/^\d{7,15}$/.test(data.phone)) errors.phone = 'Solo dígitos (7-15)';
  const age = Number(data.age);
  if (!data.age || age < 1 || age > 120) errors.age = 'Edad inválida (1-120)';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Correo inválido';
  return errors;
};

const INITIAL: FormData = {
  username: '', password: '', fullName: '',
  cedula: '', phone: '', age: '', email: '',
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (submitted) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // TODO: conectar con API
      console.log('Datos de registro:', form);
      alert('¡Registro exitoso! (API en desarrollo)');
    }
  };

  const fields: {
    name: keyof FormData;
    label: string;
    type?: string;
    placeholder: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
    maxLength?: number;
  }[] = [
    { name: 'username',  label: 'Nombre de usuario',    type: 'text',     placeholder: 'ej. carlos_99' },
    { name: 'fullName',  label: 'Nombre completo',       type: 'text',     placeholder: 'ej. Carlos Muñoz' },
    { name: 'email',     label: 'Correo electrónico',    type: 'email',    placeholder: 'ej. carlos@mail.com' },
    { name: 'cedula',    label: 'Número de cédula',      type: 'text',     placeholder: 'ej. 12345678', inputMode: 'numeric', maxLength: 12 },
    { name: 'phone',     label: 'Número telefónico',     type: 'tel',      placeholder: 'ej. 3001234567', inputMode: 'numeric', maxLength: 15 },
    { name: 'age',       label: 'Edad',                  type: 'number',   placeholder: 'ej. 22' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear cuenta</h1>
        <p className={styles.subtitle}>Completa todos los campos para registrarte</p>

        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          {fields.map(({ name, label, type = 'text', placeholder, inputMode, maxLength }) => (
            <div key={name} className={styles.field}>
              <label htmlFor={name} className={styles.label}>{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                inputMode={inputMode}
                maxLength={maxLength}
                min={name === 'age' ? 1 : undefined}
                max={name === 'age' ? 120 : undefined}
                className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}
              />
              {errors[name] && <span className={styles.error}>{errors[name]}</span>}
            </div>
          ))}

          {/* Contraseña segura */}
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <div className={styles.passwordWrapper}>
              <input
                id="password"
                name="password"
                type={showPass ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Mín. 8 car., mayús., núm. y símbolo"
                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              />
              <button
                type="button"
                className={styles.toggle}
                onClick={() => setShowPass(p => !p)}
                aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className={styles.error}>{errors.password}</span>}
            <ul className={styles.rules}>
              {[
                [/.{8,}/, 'Al menos 8 caracteres'],
                [/[A-Z]/,  'Una mayúscula'],
                [/[a-z]/,  'Una minúscula'],
                [/\d/,     'Un número'],
                [/[^A-Za-z\d]/, 'Un símbolo'],
              ].map(([regex, text]) => (
                <li
                  key={text as string}
                  className={(regex as RegExp).test(form.password) ? styles.ruleOk : styles.ruleBad}
                >
                  {(regex as RegExp).test(form.password) ? '✓' : '✗'} {text as string}
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className={styles.btn}>Registrarse</button>
        </form>

        <p className={styles.login}>
          ¿Ya tienes cuenta? <a href="/login" className={styles.link}>Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
