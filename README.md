# Portafolio — Ignacio Azzolina

Sitio estático (HTML + CSS + JS puro, sin build) con soporte bilingüe español/inglés.

## Cómo verlo local

Abrí `index.html` directamente en el navegador, o serví la carpeta:

```bash
npx serve .
```

## Idiomas

- Detecta el idioma del navegador automáticamente (español → ES, resto → EN).
- El botón 🌐 en la barra de navegación alterna entre idiomas y guarda la preferencia en `localStorage`.
- Todos los textos viven en `script.js` (objeto `I18N`). Para editar el copy, modificá ahí ambas versiones.

## Antes de publicar (TODO)

- [x] Links reales de GitHub y LinkedIn en la sección Contacto.
- [x] Foto de perfil (`assets/perfil.jpg`) en el hero.
- [ ] (Opcional) Agregar links a demos o repos de cada proyecto en las cards de la sección Proyectos.

## Deploy

**GitHub Pages:** subí la carpeta a un repo y activá Pages en Settings → Pages → branch `main`, carpeta `/`.

**Vercel / Netlify:** importá el repo; no necesita configuración (es estático).
