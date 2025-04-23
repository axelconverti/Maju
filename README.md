# Proyecto de Cuenta Regresiva Romántica

Este proyecto es una página web interactiva con una cuenta regresiva que muestra un mensaje especial cuando llega a la fecha objetivo.

## Configuración

### Fecha Objetivo

La fecha objetivo está configurada para el **12 de mayo de 2025**. Cuando la cuenta regresiva llegue a cero, se mostrará automáticamente la pantalla principal con la pregunta "¿Me quieres?".

### Probar el Estado Final

Hay dos formas de probar cómo se verá la página cuando la cuenta regresiva termine:

1. **Usando la variable de entorno simulada**: 
   - Abre el archivo `assets/js/countdown.js`
   - Cambia la línea `const SIMULATE_COUNTDOWN_END = false;` a `const SIMULATE_COUNTDOWN_END = true;`
   - Guarda el archivo y recarga la página

2. **Usando la tecla ESC**:
   - Mientras la página está cargada y mostrando la cuenta regresiva, simplemente presiona la tecla `ESC` en tu teclado
   - La cuenta regresiva desaparecerá y se mostrará la pantalla principal

## Características

- **Cuenta regresiva**: Visualmente atractiva con días, horas, minutos y segundos hasta la fecha objetivo
- **Interacción divertida**: El botón "No" se mueve cuando el usuario intenta hacer clic en él
- **Respuesta animada**: Al hacer clic en "Sí", se muestra un loader con forma de corazón y luego un GIF con un mensaje
- **Diseño responsivo**: Funciona tanto en dispositivos de escritorio como en móviles
- **Compatibilidad con pantallas táctiles**: Maneja correctamente los eventos táctiles para móviles

## Estructura del proyecto

```
love_project/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── gifs/
│   │   ├── cute_love_gif.mp4
│   │   └── ma1.gif, ma2.gif, ... (animaciones)
│   ├── images/
│   └── js/
│       ├── countdown.js
│       └── main.js
├── index.html
├── .env
└── README.md
```

## Personalización

Puedes personalizar este proyecto modificando:

- Los GIFs en la carpeta `assets/gifs/`
- Los colores y estilos en `assets/css/styles.css`
- Los mensajes en `index.html`
- La fecha objetivo en `assets/js/countdown.js`
- Para ajustar la duración de las animaciones, edita los tiempos en los archivos JavaScript

## Desarrollo

Para fines de desarrollo:
- Puedes usar la variable `SIMULATE_COUNTDOWN_END` para probar la vista final sin esperar
- Puedes desbloquear la página principal presionando la tecla "Escape"
- El archivo `.env` incluye referencias a las variables de entorno (aunque actualmente se implementan directamente en JS)

## Compatibilidad

- Compatible con todos los navegadores modernos
- Diseño adaptable para dispositivos móviles y de escritorio
- Manejo especial para eventos táctiles en dispositivos móviles
