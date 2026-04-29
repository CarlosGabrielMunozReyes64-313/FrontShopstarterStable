# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## estructura del proyecto:

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
│   │   ├── variables.css              # Colores, fuentes (tema ML: amarillo #FFE600)
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
└── .env         
```                 # Variables de entorno (API keys del mapa)
