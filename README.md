# Contenido Dinámico

## Objetivo / Target

El obejtivo es crear un sistema para poder reutilizar componentes bases como el **dialog** o **sidenav**, pero con contenido dinámico en su interior dependiendo desde donde fue ejecutado.
The target is create a system where we can reuse base components like a **dialog** or **sidenav**, but with dynamic content inside them depending where it was launch from.

## Solución / Solution

Para poder realizar esto, la solución a la cual llegué es que los componentes se comuniquen por medio de un **servicio**.
To be able to do this, the solution which I reached is that the components communicate through a **service**.

## Explicación / Explanation

Toda la funcionalidad para poder ejecutar cada componente (dialog o sidenav) se encuentra en el **servicio**. Luego tenemos un **emisor** que nos dice cuando se ejecute el componente y que contenido se va a mostrar. Por otro lado tenemos un **receptor** que ejecuta el componente y selecciona lo que se muestra.
All the functionality to be able to execute each component (dialog or sidenav) is found in the **service**. Then we have an **emitter** which tells us when the component is executed and which content is going to be shown. On the other hand we have a **receiver** which execute the component and select what is shown.

## Pruébalo / Test It

Puedes probarlo en [stackblitz](https://stackblitz.com/edit/contenido-dinamico?file=src/app/app.component.ts)
You can test it on [stackblitz](https://stackblitz.com/edit/contenido-dinamico?file=src/app/app.component.ts)

## Presentación Visual / Visual Presentation

Puedes ver el proyecto con una presentación en mi [Behance](https://www.behance.net/gallery/161536611/Contenido-Dinamico)
You can check the project with a presentation on my [Behance](https://www.behance.net/gallery/161536611/Contenido-Dinamico)