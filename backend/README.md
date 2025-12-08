# Backend - Echo Tecnología

Backend API construido con Node.js, Express, TypeScript y Supabase.

## 🚀 Tecnologías

- **Node.js** + **Express** - Framework web
- **TypeScript** - Tipado estático
- **Supabase** - Base de datos y autenticación
- **CORS** - Middleware para permitir peticiones cross-origin

## 📁 Estructura

```
backend/
├── src/
│   ├── config/
│   │   └── supabase.ts      # Configuración de Supabase
│   ├── routes/
│   │   ├── products.ts      # Rutas de productos
│   │   └── auth.ts          # Rutas de autenticación
│   └── index.ts             # Punto de entrada
├── .env.example             # Variables de entorno ejemplo
├── tsconfig.json            # Configuración TypeScript
├── nodemon.json             # Configuración Nodemon
└── package.json
```

## ⚙️ Configuración

1. **Copiar variables de entorno:**

   ```bash
   cp .env.example .env
   ```

2. **Configurar Supabase:**

   - Crear proyecto en [supabase.com](https://supabase.com)
   - Obtener `SUPABASE_URL` y `SUPABASE_ANON_KEY` en Project Settings > API
   - Actualizar `.env` con tus credenciales

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

## 🗄️ Base de Datos

Crear tabla de productos en Supabase:

```sql
create table products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price numeric not null,
  category text,
  image text,
  stock integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Row Level Security
alter table products enable row level security;

-- Política para lectura pública
create policy "Allow public read access"
  on products for select
  to anon
  using (true);

-- Política para escritura autenticada
create policy "Allow authenticated insert"
  on products for insert
  to authenticated
  with check (true);

create policy "Allow authenticated update"
  on products for update
  to authenticated
  using (true);

create policy "Allow authenticated delete"
  on products for delete
  to authenticated
  using (true);
```

## 🔧 Scripts

- `npm run dev` - Inicia servidor en modo desarrollo con hot-reload
- `npm run build` - Compila TypeScript a JavaScript
- `npm start` - Inicia servidor en producción

## 📡 API Endpoints

### Autenticación

- `POST /api/auth/register` - Registrar usuario (role: user por defecto)
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/user` - Obtener usuario actual
- `GET /api/auth/profile` - Obtener perfil con rol
- `PUT /api/auth/profile` - Actualizar perfil

### Gestión de Usuarios (Solo Admins)

- `POST /api/auth/create-user` - Crear usuario (admin o user)
- `GET /api/auth/users` - Listar todos los usuarios
- `PUT /api/auth/users/:id/role` - Cambiar rol de usuario

## 📝 Ejemplo de Uso

```javascript
// Registro
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}

// Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

// Crear producto (requiere token)
POST /api/products
Headers: { "Authorization": "Bearer <token>" }
{
  "name": "Amazon Echo Dot",
  "description": "Altavoz inteligente con Alexa",
  "price": 49.99,
  "category": "altavoces",
  "image": "https://...",
  "stock": 10
}
```

## 🔐 Seguridad

- Autenticación JWT manejada por Supabase
- Row Level Security (RLS) en tablas
- CORS configurado para frontend
- Variables de entorno para credenciales

## 🚀 Despliegue

El backend puede desplegarse en:

- Vercel
- Railway
- Render
- Heroku
- DigitalOcean

Asegurar configurar variables de entorno en el servicio de hosting.
