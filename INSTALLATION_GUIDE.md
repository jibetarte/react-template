1) Instalar npm y node
    `npm install -g npm`
2) Instalar vite
    `npm create vite@latest`
    a - Name: my-project
    b - Framework: React
    c - Variant: Typescript
3) Ingresar a la carpeta del proyecto
    `cd my-project`
4) Instalar Tailwindcss
    a. `npm install -D tailwindcss postcss autoprefixer`
        `npx tailwindcss init -p`
    b. En el archivo tailwind.config.js reemplazar la key content por lo siguiente:
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
    d. Agregar lo siguiente al index.css de la carpeta src
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
5) Instalar react router
    `npm install react-router-dom`
6) Instalar axios
    `npm install axios`
7) Instalar react query
    `npm i react-query`

TIPS
- Usar shadcnui para usar componentes ya existentes -> https://ui.shadcn.com/docs/installation/vite