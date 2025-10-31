// ✅ Importamos hooks de React
// useEffect → para ejecutar código cuando el componente se monta
// useState → para manejar el estado interno del componente
import { useEffect, useState } from "react";

// ✅ Importamos el componente AccordionItem
// Este componente muestra cada comentario dentro de un acordeón (plegable)
import AccordionItem from "../components/AccordionItem";
// ✅ Importamos el tipo CommentType
// Esto define cómo luce un comentario (id, name, email, body, etc.)
import type { CommentType } from "../types/CommentTypes";

// ✅ Componente principal de la página
export default function CommentsPage() {
    // 🔹 Estado para guardar la lista de comentarios obtenidos de la API
    // El tipo es un arreglo de CommentType
    const [comments, setComments] = useState<CommentType[]>([]);

    // 🔹 Estado para saber qué comentario está abierto actualmente
    // Si es null → ninguno está abierto
    // Si tiene un número → ese ID de comentario está abierto
    const [activeId, setActiveId] = useState<number | null>(null);

    // ✅ useEffect se ejecuta solo una vez al montar el componente
    // porque tiene el arreglo de dependencias vacío `[]`
    useEffect(() => {
        // 🔹 Hacemos una petición a la API pública para obtener comentarios
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then((res) => res.json()) // Convertimos la respuesta a JSON
            .then((data) => setComments(data)) // Guardamos los datos en el estado "comments"
            .catch((err) => console.error(err)); // Si hay un error, lo mostramos en consola
    }, []); // 👈 el arreglo vacío significa: ejecutar solo una vez

    // ✅ Función que maneja el abrir/cerrar de cada comentario
    const handleToggle = (id: number) => {
        // 👇 Si el mismo comentario está abierto → lo cerramos (null)
        //    Si es otro → abrimos ese nuevo (id)
        setActiveId((prev) => (prev === id ? null : id));
    };

    // ✅ Renderizado del componente
    return (
        <div className="p-8 max-w-3xl mx-auto">
            {/* 🔹 Título de la página */}
            <h1 className="text-2xl font-bold mb-4 text-center">Comentarios de la API</h1>

            {/* 🔹 Contenedor de los acordeones con espaciado entre ellos */}
            <div className="space-y-2">
                {/* Recorremos todos los comentarios del estado */}
                {comments.map((comment) => (
                    <AccordionItem
                        key={comment.id} // 👈 Clave única requerida por React
                        comment={comment} // 👈 Pasamos el comentario completo
                        isOpen={activeId === comment.id} // 👈 Booleano: ¿está abierto este acordeón?
                        onToggle={() => handleToggle(comment.id)} // 👈 Función al hacer clic
                    />
                ))}
            </div>
        </div>
    );
}
