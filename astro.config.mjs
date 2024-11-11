import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Otras configuraciones...
    output: 'static',
    base: '/',
    content: {
        collections: {
            pages: {
                schema: undefined, // Puedes agregar un esquema de validación si lo deseas
            },
        },
    },
});
