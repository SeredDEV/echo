# Supabase Database Setup

Estructura organizada de scripts SQL para configurar la base de datos.

## 📁 Estructura

```
supabase/
├── migrations/          # Scripts de migración (ejecutar en orden)
│   └── 001_setup_users.sql
└── scripts/            # Scripts de utilidad (ejecutar según necesidad)
    └── make_user_admin.sql
```

## 🚀 Setup Inicial

### 1. Ejecutar Migración de Usuarios

En Supabase → **SQL Editor**, ejecuta:

```sql
-- Archivo: migrations/001_setup_users.sql
```

Esto creará:
- ✅ Tabla `profiles` con campos: id, email, full_name, avatar_url, phone, role
- ✅ Row Level Security (RLS) habilitado
- ✅ Políticas de seguridad configuradas
- ✅ Trigger que crea perfil automáticamente al registrarse

### 2. Crear Primer Admin

Después de registrar tu primer usuario:

1. Ve a **Table Editor** → `profiles`
2. Encuentra tu usuario y copia su `id`
3. Ve a **SQL Editor**
4. Ejecuta `scripts/make_user_admin.sql` reemplazando el ID

**O directamente:**
```sql
update public.profiles 
set role = 'admin' 
where email = 'tu-email@ejemplo.com';
```

## 🔐 Roles y Permisos

### User (role: 'user')
- Puede ver todos los perfiles
- Puede actualizar su propio perfil (excepto role)
- **NO** puede cambiar su rol
- **NO** puede crear otros usuarios

### Admin (role: 'admin')
- Puede hacer todo lo que un user
- Puede actualizar cualquier perfil (incluyendo roles)
- Puede crear usuarios vía API: `POST /api/auth/create-user`
- Puede listar usuarios: `GET /api/auth/users`
- Puede cambiar roles: `PUT /api/auth/users/:id/role`

## 📝 Notas

- Todos los usuarios nuevos son `'user'` por defecto
- Solo admins pueden crear otros admins
- El primer admin debe crearse manualmente con SQL
- Después puedes gestionar usuarios desde el API
