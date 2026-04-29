import { useNavigate } from 'react-router-dom';
import styles from './Authchoice.css';

import imgLogin    from '../../assets/images/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.png';
import imgRegister from '../../assets/images/Sabes-que-te-dice-ese-paisaje.jpg';

export default function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>

      {/* ── Mitad izquierda: Register ── */}
      <div
        className={styles.half}
        style={{ backgroundImage: `url(${imgRegister})` }}
        onClick={() => navigate('/register')}
      >
        <div className={styles.overlay} />
        <span className={styles.label}>No tengo una cuenta</span>
      </div>

      {/* ── Divisor central ── */}
      <div className={styles.divider} />

      {/* ── Mitad derecha: Login ── */}
      <div
        className={styles.half}
        style={{ backgroundImage: `url(${imgLogin})` }}
        onClick={() => navigate('/login')}
      >
        <div className={styles.overlay} />
        <span className={styles.label}>Entrar a Shopstarter</span>
      </div>

    </div>
  );
}