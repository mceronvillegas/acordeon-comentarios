// ✅ Importamos el tipo CommentType desde la carpeta types
// Este tipo define la forma que tiene cada comentario (id, name, email, body, etc.)

import type { CommentType } from "../types/CommentTypes";

// Función asíncrona para obtener los comentarios desde la API pública
// ✅ Función asíncrona que obtiene los comentarios desde una API pública
// El tipo de retorno "Promise<CommentType[]>" significa que esta función
// devuelve una promesa que resuelve en un arreglo de comentarios.
export async function getComments(): Promise<CommentType[]> {
    // 🔹 Hacemos una petición HTTP GET a la API de comentarios
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    // 🔹 Validamos si la respuesta fue exitosa (status 200–299)
    // Si no, lanzamos un error para manejarlo luego con try/catch o .catch()
    if (!response.ok) {
        throw new Error("Error al cargar los comentarios");
    }
    // 🔹 Convertimos la respuesta en un arreglo de objetos JSON
    // y le decimos a TypeScript que tendrá la forma de CommentType[]
    const data: CommentType[] = await response.json();
    return data.slice(0, 20); // solo tomamos 20 para no sobrecargar
}
