import type { CommentType } from "../types/CommentTypes";

// Función asíncrona para obtener los comentarios desde la API pública
export async function getComments(): Promise<CommentType[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");

    if (!response.ok) {
        throw new Error("Error al cargar los comentarios");
    }

    const data: CommentType[] = await response.json();
    return data.slice(0, 20); // solo tomamos 20 para no sobrecargar
}
