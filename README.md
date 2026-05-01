# Centro de Rehabilitación Valentía

Sitio web oficial del Centro de Rehabilitación Valentía. Construido con React 18, Vite 5, Material UI 5 y Supabase.

---

## Despliegue en Vercel

### Requisitos previos

- Cuenta en [Vercel](https://vercel.com)
- Proyecto en [Supabase](https://supabase.com) con las credenciales disponibles
- Node.js 18 o superior
- Git con el repositorio ya subido a GitHub, GitLab o Bitbucket

---

### Paso 1 — Variables de entorno

La aplicación requiere estas dos variables de entorno para conectarse a Supabase:

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `VITE_SUPABASE_URL` | URL del proyecto Supabase | Supabase → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Clave anónima de Supabase | Supabase → Project Settings → API → anon / public |

Copia `.env.example` a `.env.local` para desarrollo local:

```bash
cp .env.example .env.local
# Luego edita .env.local con tus valores reales
```

> `.env.local` está en `.gitignore` — nunca lo subas al repositorio.

---

### Paso 2 — Opción A: Despliegue desde el dashboard de Vercel (recomendado)

1. Entra a [vercel.com/new](https://vercel.com/new) e importa tu repositorio de GitHub/GitLab/Bitbucket.
2. Vercel detecta automáticamente que es un proyecto Vite. Verifica que los ajustes sean:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. En la sección **Environment Variables**, agrega:
   - `VITE_SUPABASE_URL` → tu URL de Supabase
   - `VITE_SUPABASE_ANON_KEY` → tu clave anónima
4. Haz clic en **Deploy**.

Cada vez que hagas `git push` a la rama principal, Vercel desplegará automáticamente.

---

### Paso 2 — Opción B: Despliegue desde la CLI de Vercel

```bash
# Instalar la CLI de Vercel (una sola vez)
npm install -g vercel

# Desde la raíz del proyecto, iniciar sesión y desplegar
vercel login
vercel

# Para desplegar a producción directamente
vercel --prod
```

Durante el primer `vercel`, la CLI te preguntará por las variables de entorno. También puedes agregarlas después desde el dashboard.

---

### Paso 3 — Configurar las variables de entorno en Vercel dashboard

Si no las agregaste durante el setup:

1. Entra a tu proyecto en [vercel.com/dashboard](https://vercel.com/dashboard)
2. Ve a **Settings → Environment Variables**
3. Agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
4. Selecciona los entornos: **Production**, **Preview** y **Development**
5. Guarda y vuelve a desplegar desde **Deployments → Redeploy**

---

### Configuración de rutas (SPA)

Esta aplicación usa `HashRouter`, por lo que no requiere configuración adicional de rewrites en Vercel. Si en el futuro se migra a `BrowserRouter`, crear un `vercel.json` en la raíz con:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar el build localmente
npm run preview
```

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18 | UI |
| Vite | 5 | Bundler y servidor de desarrollo |
| Material UI | 5 | Componentes y tema visual |
| Supabase JS | 2 | Backend: autenticación y base de datos |
| React Router | 6 | Navegación SPA |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx           # Barra de navegación responsive
│   ├── HeroSection.jsx      # Sección principal
│   ├── MissionSection.jsx   # Misión y pilares
│   ├── ServicesSection.jsx  # Servicios ofrecidos
│   ├── ReserveSection.jsx   # Información de reservas
│   ├── NewsSection.jsx      # Noticias y recursos
│   ├── ContactForm.jsx      # Formulario de contacto con validación
│   ├── GallerySection.jsx   # Galería de imágenes
│   ├── LocationsSection.jsx # Ubicaciones
│   ├── Footer.jsx           # Pie de página
│   └── ProtectedRoute.jsx   # Guard para rutas de admin
├── context/
│   └── AuthContext.jsx      # Contexto de autenticación
├── lib/
│   └── supabase.js          # Cliente de Supabase
├── pages/
│   ├── LandingPage.jsx      # Página principal (pública)
│   ├── LoginPage.jsx        # Login de administrador
│   └── AdminPage.jsx        # Panel de administración (protegido)
├── App.jsx                  # Componente raíz con rutas
└── main.jsx                 # Punto de entrada
```

---

## Rutas

| Ruta | Acceso | Descripción |
|---|---|---|
| `/#/` | Público | Landing page principal |
| `/#/login` | Público | Login del administrador |
| `/#/admin` | Protegido | Panel de administración |

---

## Variables de entorno de referencia

Ver `.env.example`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

---

© 2025 Centro de Rehabilitación Valentía. Todos los derechos reservados.
