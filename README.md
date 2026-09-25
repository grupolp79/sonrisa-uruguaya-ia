# Sonrisa Uruguaya – Clínica Dental con asistente IA

Página web de la clínica dental ficticia **Sonrisa Uruguaya** (Montevideo), con un agente de Inteligencia Artificial creado en **Chatbase**.

Actividad evaluable – Integración de IA · UTU 2026

## Qué incluye

- **Página web** (HTML, CSS y JavaScript): inicio, servicios, horarios, urgencias, preguntas frecuentes y sección de ayuda.
- **Chatbot (burbuja):** la asistente virtual "Sofía", disponible en la esquina inferior derecha.
- **Help Page con IA:** centro de ayuda de Chatbase publicado en la ruta `/help` del sitio.
- **Deploy en Vercel** conectado a este repositorio.

## Configuración del agente

El agente se configuró definiendo:

| Elemento | Qué se definió |
|---|---|
| Rol | Sofía, asistente de recepción de la clínica |
| Objetivo | Informar horarios, servicios y urgencias |
| Tono | Amable, cercano, profesional y breve |
| Restricciones | No inventar datos, no dar diagnósticos ni medicamentos, no salirse del tema |
| Urgencias | Distingue consultas habituales de urgencias y deriva menores de 12 años al Hospital Pediátrico |
| Ejemplos | Respuestas modelo para casos típicos y datos no disponibles |

Los textos usados están en la carpeta [`chatbase/`](chatbase/):

- `instrucciones-agente.md` → instrucciones (prompt) del agente.
- `base-de-conocimiento.txt` → fuente de información con la que se entrenó.

## Help Page en `/help`

La Help Page se muestra dentro del dominio del sitio usando *rewrites* de Vercel (`vercel.json`), según la guía oficial de Chatbase *Help Page Proxy*.

## Estructura

```
├── index.html
├── css/styles.css
├── js/main.js
├── img/favicon.svg
├── vercel.json
└── chatbase/
    ├── instrucciones-agente.md
    └── base-de-conocimiento.txt
```

> Clínica ficticia utilizada con fines educativos.
