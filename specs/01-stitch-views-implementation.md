# SPEC 01 — Implementación de las vistas Stitch de OpenDaycare

> **Status:** Approved
> **Depends on:** Ninguna
> **Date:** 2026-11-03
> **Objective:** Convertir los siete mockups HTML de `referencias` en una experiencia navegable de OpenDaycare usando rutas y componentes React reutilizables.

## Scope

**In:**

- Implementar el feed de padres de `referencias/stitch_opendaycare_account_activation_form/feed_padres_opendaycare/code.html` como home en `/`.
- Mantener las vistas adicionales como prototipos navegables, sin convertirlas en un flujo de autenticación.
- Crear navegación entre vistas con App Router y componentes compartidos.
- Reproducir el lenguaje visual de los mockups con Tailwind y CSS local.
- Añadir interacciones locales para filtros, likes, formularios, comentarios, toggles y mensajes de confirmación.
- Hacer las vistas responsive para escritorio y móvil.

**Out of scope (for future specs):**

- Autenticación real y persistencia en base de datos.
- API, subida real de archivos, notificaciones push y sincronización multiusuario.
- Roles administrativos o vistas para maestras.

## Data model

La implementación usa datos locales tipados dentro de componentes y no introduce persistencia.

```ts
type Child = { id: string; name: string; age: string; room: string; color: string };
type Post = { id: number; child: string; type: string; text: string; time: string; likes: number; comments: number };
```

## Implementation plan

1. Crear la especificación y la estructura de navegación del App Router.
2. Extraer el shell del dashboard, los datos demo y los controles compartidos.
3. Implementar las vistas autenticadas: dashboard, feed, avisos y cuenta.
4. Implementar los flujos de activación, nueva publicación y alta de niño.
5. Ajustar responsive, accesibilidad, estados locales y metadatos.
6. Ejecutar lint, typecheck y build, y revisar las rutas principales en navegador.

## Acceptance criteria

- [ ] `/` muestra directamente el feed de padres sin redirección ni pantalla de autenticación.
- [ ] El feed de padres conserva la estructura visual del mockup de Stitch.
- [ ] La navegación lateral y los enlaces de acciones llevan a rutas reales.
- [ ] El feed permite filtrar por hijo y marcar publicaciones con like.
- [ ] Nueva publicación permite seleccionar destinatario, tipo y mostrar confirmación local.
- [ ] Agregar niño valida nombre y muestra el niño agregado localmente.
- [ ] Mi cuenta permite cambiar toggles de preferencias y cerrar sesión de forma simulada.
- [ ] Las vistas se adaptan a pantallas móviles sin desbordamiento horizontal.
- [ ] `npm run lint`, `npx tsc --noEmit` y `npm run build` terminan correctamente.

## Decisions

- **Sí:** rutas independientes para cada mockup; facilita revisar y evolucionar cada flujo.
- **Sí:** datos locales tipados; los mockups no incluyen backend ni contratos de API.
- **Sí:** componentes compartidos para mantener una sola navegación y una sola identidad visual.
- **No:** copiar los HTML con Tailwind CDN; el proyecto compila Tailwind localmente.
- **No:** implementar autenticación o persistencia antes de definir su modelo de backend.

## Risks

| Risk | Mitigation |
| --- | --- |
| Los mockups contienen datos inconsistentes entre sí. | Usar un dataset demo único y coherente para todas las vistas. |
| Las imágenes remotas pueden fallar. | Usar placeholders visuales locales cuando no haya un recurso confiable. |
| Los estados locales se pierden al recargar. | Documentarlo como alcance demo y dejar persistencia para otra especificación. |

## What is **not** in this spec

- Backend, base de datos, autenticación real o almacenamiento persistente.
- Subida real de fotografías.
- Roles de personal del daycare.
