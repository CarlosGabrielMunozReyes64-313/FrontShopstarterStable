# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para hacer funcionar React con Vite, incluyendo HMR (Hot Module Replacement) y algunas reglas de ESLint.

Actualmente hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/)

## Compilador de React

El Compilador de React está habilitado en esta plantilla. Consulta [esta documentación](https://react.dev/learn/react-compiler) para más información.

Nota: Esto puede afectar el rendimiento del servidor de desarrollo y la compilación de Vite.

## Ampliar la configuración de ESLint

Si estás desarrollando una aplicación para producción, recomendamos actualizar la configuración para habilitar reglas de lint con verificación de tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...

      // Elimina tseslint.configs.recommended y reemplázalo con esto
      tseslint.configs.recommendedTypeChecked,
      // También puedes usar esto para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agrega esto para reglas de estilo
      tseslint.configs.stylisticTypeChecked,

      // Otras configuraciones...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas de lint específicas de React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...
      // Habilitar reglas de lint para React
      reactX.configs['recommended-typescript'],
      // Habilitar reglas de lint para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])
```

## Estructura del proyecto

```
FrontShopstarterStable/
│
├── public/
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/                        # Imágenes, íconos, fuentes estáticas
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/                    # Componentes reutilizables (UI puro)
│   │   ├── common/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Navbar.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── Button/
│   │   │   │   └── Button.tsx
│   │   │   ├── Input/
│   │   │   │   └── Input.tsx
│   │   │   ├── Modal/
│   │   │   │   └── Modal.tsx
│   │   │   ├── Spinner/
│   │   │   │   └── Spinner.tsx
│   │   │   └── ProductCard/           # Tarjeta de producto estilo ML
│   │   │       ├── ProductCard.tsx
│   │   │       └── ProductCard.module.css
│   │   │
│   │   ├── map/                       # Componentes del mapa
│   │   │   ├── MapView.tsx            # Componente principal del mapa
│   │   │   ├── VendorMarker.tsx       # Marcador de vendedor en el mapa
│   │   │   └── MapControls.tsx        # Controles de zoom/ubicación
│   │   │
│   │   └── vendor/                    # Componentes de vendedores
│   │       ├── VendorCard.tsx         # Tarjeta de perfil del vendedor
│   │       ├── VendorList.tsx         # Lista de vendedores cercanos
│   │       └── VendorDetail.tsx       # Detalle de un vendedor
│   │
│   ├── pages/                         # Páginas / vistas de la app
│   │   ├── Home/
│   │   │   ├── HomePage.tsx           # Landing + búsqueda principal (estilo ML)
│   │   │   └── HomePage.module.css
│   │   ├── Auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── Auth.module.css
│   │   ├── Map/
│   │   │   ├── MapPage.tsx            # Vista del mapa con vendedores
│   │   │   └── MapPage.module.css
│   │   ├── Products/
│   │   │   ├── ProductsPage.tsx       # Listado de productos (estilo ML)
│   │   │   ├── ProductDetailPage.tsx  # Detalle de producto
│   │   │   └── Products.module.css
│   │   ├── Orders/
│   │   │   ├── OrdersPage.tsx         # Historial de pedidos
│   │   │   ├── OrderDetailPage.tsx
│   │   │   └── Orders.module.css
│   │   ├── Cart/
│   │   │   ├── CartPage.tsx           # Carrito de compras
│   │   │   └── Cart.module.css
│   │   └── Profile/
│   │       ├── ProfilePage.tsx        # Perfil del usuario
│   │       └── Profile.module.css
│   │
│   ├── router/
│   │   └── AppRouter.tsx              # Definición de rutas (React Router)
│   │
│   ├── context/                       # Estado global con Context API
│   │   ├── AuthContext.tsx            # Sesión del usuario
│   │   ├── CartContext.tsx            # Estado del carrito
│   │   └── LocationContext.tsx        # Geolocalización del usuario
│   │
│   ├── hooks/                         # Custom Hooks
│   │   ├── useAuth.ts                 # Lógica de autenticación
│   │   ├── useGeolocation.ts          # Hook para obtener coordenadas
│   │   ├── useVendors.ts              # Fetch de vendedores cercanos
│   │   └── useCart.ts                 # Lógica del carrito
│   │
│   ├── services/                      # Comunicación con el backend/API
│   │   ├── api.ts                     # Instancia base de axios/fetch
│   │   ├── authService.ts             # Login, register, logout
│   │   ├── vendorService.ts           # Endpoints de vendedores
│   │   ├── productService.ts          # Endpoints de productos
│   │   └── orderService.ts            # Endpoints de pedidos
│   │
│   ├── types/                         # Tipos e interfaces TypeScript
│   │   ├── auth.types.ts
│   │   ├── vendor.types.ts
│   │   ├── product.types.ts
│   │   └── order.types.ts
│   │
│   ├── utils/                         # Funciones auxiliares
│   │   ├── formatCurrency.ts          # Formatear precios estilo ML
│   │   ├── calculateDistance.ts       # Distancia entre coordenadas
│   │   └── validators.ts              # Validaciones de formularios
│   │
│   ├── styles/                        # Estilos globales y variables
│   │   ├── variables.css              # Colores, fuentes (tema ML: Azul #0073ff)
│   │   ├── global.css
│   │   └── mixins.css
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env                               # Variables de entorno (API keys del mapa)
```