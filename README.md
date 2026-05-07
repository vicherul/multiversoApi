# 🌌 Multiverso API - Rick and Morty Characters Gallery

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-Educativo-green)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](README.md)

Una aplicación web moderna que consume la API pública de Rick and Morty para mostrar una galería interactiva de personajes del universo de la serie.


<img width="2560" height="3498" alt="MultiversoApi" src="https://github.com/user-attachments/assets/d53e5cf0-3016-4de7-a648-04d1d34fb01f" />


```
┌─────────────────────────────────────────┐
│  Rick and Morty Characters Gallery      │
│                                         │
│  [🔄 Vivo]  [💀 Muerto]  [❓ Unknown] │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │ Rick │  │Morty │  │ Beth │         │
│  │ 🟢   │  │ 🟢   │  │ 🟢   │         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
└─────────────────────────────────────────┘
```

## ✨ Características

- **Galería Dinámica**: Visualiza una cuadrícula responsive con todos los personajes disponibles
- **Información Completa**: Cada tarjeta muestra nombre, imagen, estado y especie del personaje
- **Estados Visuales**: Indicadores de color que diferencian personajes Vivos, Muertos o Desconocidos
- **Manejo de Estados**: Incluye estados de carga y manejo robusto de errores
- **TypeScript**: Código completamente tipado para mayor seguridad y mantenibilidad
- **Imágenes Optimizadas**: Lazy loading implementado para mejor rendimiento
- **Accesibilidad**: Semántica HTML correcta y atributos ARIA

## 🛠️ Stack Tecnológico

- **React** (v19.2.4) - Librería UI
- **TypeScript** (v5.9.3) - Tipado estático
- **Vite** (v8.0.1) - Build tool rápido
- **ESLint** - Análisis de código
- **CSS3** - Estilos personalizados

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación y Setup

1. **Clona o descargar el proyecto**

   ```bash
   cd multiversoApi
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

## 🎮 Comandos Disponibles

```bash
# Inicia el servidor de desarrollo (http://localhost:5173)
npm run dev

# Compila el proyecto para producción
npm run build

# Previsualiza la build de producción
npm run preview

# Ejecuta el linter ESLint
npm run lint
```

## 📁 Estructura del Proyecto

```
multiversoApi/
├── src/
│   ├── components/
│   │   └── CharacterCard/          # Componente de tarjeta individual
│   │       ├── CharacterCard.tsx
│   │       └── CharacterCard.css
│   ├── hooks/
│   │   └── useCharacter.ts         # Hook para fetch de datos
│   ├── pages/
│   │   ├── Gallery.tsx             # Página principal
│   │   └── Gallery.css
│   ├── types/
│   │   └── character.ts            # Interfaz TypeScript
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                         # Activos estáticos
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🔧 Detalles Técnicos

### Hook `useCharacter`

Gestiona el ciclo de vida de la obtención de datos:

- Realiza fetch a la API de Rick and Morty
- Maneja estados de carga, error y éxito
- Retorna array tipado de personajes

### Componente `CharacterCard`

Presenta cada personaje con:

- Imagen con lazy loading
- Indicador de estado visual (color)
- Información del personaje (nombre, estado, especie)
- Tipado completo con TypeScript

## 🎯 Características Destacadas

✅ **Tipado TypeScript**: Interfaz `Character` bien definida  
✅ **Error Handling**: Gestión de errores de red y validaciones  
✅ **UX Completa**: Loader animado durante la carga  
✅ **Responsive**: Adaptable a diferentes tamaños de pantalla  
✅ **Performance**: Lazy loading de imágenes  
✅ **Accesibilidad**: Atributos semánticos y ARIA

## 🚧 Posibles Mejoras

- [ ] Paginación o scroll infinito
- [ ] Búsqueda y filtrado de personajes
- [ ] Página de detalle con información expandida
- [ ] Favoritos o lista de seguimiento
- [ ] Caché local con localStorage
- [ ] Animaciones de transición
- [ ] Implementar Tailwind CSS para estilos más eficientes

## 💨 Integrar Tailwind CSS (Próximo Paso)

Si deseas cambiar el proyecto para usar **Tailwind CSS** (recomendado para desarrollo más rápido):

### 1. Instalar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configurar `tailwind.config.js`

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. Reemplazar CSS por clases Tailwind

**Antes (CharacterCard.tsx):**

```tsx
<article className="character-card">
  <img className="character-image" />
</article>
```

**Después:**

```tsx
<article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
  <img className="w-full h-64 object-cover" />
</article>
```

### 4. Limpiar archivos CSS

- Eliminar `Gallery.css` y `CharacterCard.css`
- Actualizar `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Ventajas de Tailwind CSS

✅ Desarrollo más rápido  
✅ Estilos consistentes  
✅ Menos CSS personalizado  
✅ Bundle size optimizado  
✅ Mejor mantenibilidad

## 🎥 Demo y Visualización

### Capturas de Pantalla

- **Galería Cargada**: Grid responsivo con tarjetas de personajes
- **Estados Visuales**: Indicadores de color (Verde = Vivo, Rojo = Muerto, Gris = Desconocido)
- **Loader**: Animación mientras se cargan los datos
- **Error Handling**: Mensaje claro si hay problemas de conexión

### Ejecutar Localmente

```bash
npm run dev
```

Accede a `http://localhost:5173` en tu navegador.

## 🌐 Deployment

### Vercel 

1. Sube tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Vite
4. Haz click en "Deploy"
5. Tu app estará disponible en `https://tu-proyecto.vercel.app`


## 📚 API Reference

Proyecto consumidor de: [Rick and Morty API](https://rickandmortyapi.com/)

Endpoint utilizado: `https://rickandmortyapi.com/api/character`

Documentación completa: [Rick and Morty API Docs](https://rickandmortyapi.com/documentation)

<img width="701" height="889" alt="Api" src="https://github.com/user-attachments/assets/5c15f6a0-fef8-4ac1-8884-527cccb24b47" />


## 📝 Licencia

Proyecto educativo. Rick and Morty es propiedad de Cartoon Network.
