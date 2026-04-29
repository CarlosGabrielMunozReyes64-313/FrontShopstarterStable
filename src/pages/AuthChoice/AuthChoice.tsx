/* ── Variables ── */
:root {
  --dark-overlay:  rgba(10, 25, 47, 0.82);
  --hover-overlay: rgba(10, 25, 47, 0.45);
  --accent:        #2196f3;
  --text:          #cdd9e5;
  --divider:       #1d6fa4;
}

/* ── Contenedor principal ── */
.wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* ── Cada mitad ── */
.half {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: flex .5s ease;
  overflow: hidden;
}

/* Al hacer hover la mitad se expande ligeramente */
.half:hover {
  flex: 1.15;
}

/* ── Overlay oscuro encima de la imagen ── */
.overlay {
  position: absolute;
  inset: 0;
  background: var(--dark-overlay);
  transition: background .35s ease;
}

.half:hover .overlay {
  background: var(--hover-overlay);
}

/* ── Texto central ── */
.label {
  position: relative;          /* encima del overlay */
  z-index: 1;
  color: var(--text);
  font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-weight: 700;
  text-align: center;
  letter-spacing: .6px;
  padding: 1rem 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: color .3s, border-color .3s, text-shadow .3s;
  user-select: none;
}

.half:hover .label {
  color: #ffffff;
  border-color: var(--accent);
  text-shadow: 0 0 18px rgba(33, 150, 243, 0.7);
}

/* ── Línea divisoria ── */
.divider {
  width: 2px;
  height: 100%;
  background: var(--divider);
  box-shadow: 0 0 12px rgba(33, 150, 243, 0.5);
  z-index: 2;
  flex-shrink: 0;
}

/* ── Responsive: en móvil se apilan ── */
@media (max-width: 600px) {
  .wrapper   { flex-direction: column; }
  .divider   { width: 100%; height: 2px; }
  .half:hover { flex: 1.1; }
}