-- ====================================
-- SETUP DE USUARIOS Y AUTENTICACIÓN
-- ====================================

-- 1. Crear tabla de perfiles de usuario (extiende auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  phone text,
  role text default 'user' check (role in ('admin', 'user')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Habilitar Row Level Security
alter table public.profiles enable row level security;

-- 3. Políticas de seguridad para profiles
create policy "Profiles are viewable by everyone"
  on profiles for select
  using (true);

create policy "Users can insert their own profile"
  on profiles for insert
  with check (auth.uid() = id and role = 'user');

create policy "Users can update their own profile (except role)"
  on profiles for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id 
    and role = (select role from profiles where id = auth.uid())
  );

create policy "Admins can update any profile including roles"
  on profiles for update
  using (
    exists (
      select 1 from profiles 
      where id = auth.uid() 
      and role = 'admin'
    )
  );

-- 4. Función para crear perfil automáticamente al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- 5. Trigger para crear perfil al registrar usuario
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ====================================
-- CREAR USUARIO ADMIN INICIAL
-- ====================================

-- Crear usuario admin: Sergio Rodriguez
-- Email: sergiomorales9510@gmail.com
-- Password: Sered-1234

-- Insertar en auth.users (esto disparará el trigger que crea el profile)
insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'sergiomorales9510@gmail.com',
  crypt('Sered-1234', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  jsonb_build_object('full_name', 'Sergio Rodriguez', 'phone', '3011284297'),
  now(),
  now(),
  '',
  '',
  '',
  ''
) returning id;

-- Actualizar el perfil a admin
update public.profiles 
set 
  role = 'admin',
  phone = '3011284297',
  full_name = 'Sergio Rodriguez'
where email = 'sergiomorales9510@gmail.com';
