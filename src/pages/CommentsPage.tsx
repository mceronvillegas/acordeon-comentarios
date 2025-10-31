import { useEffect, useState } from "react";

import AccordionItem from "../components/AccordionItem";
import type { CommentType } from "../types/CommentTypes";

export default function CommentsPage() {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [activeId, setActiveId] = useState<number | null>(null); // 👈 guarda el id del comentario abierto

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error(err));
    }, []);

    const handleToggle = (id: number) => {
        // 👇 si el mismo está abierto, lo cerramos; si no, abrimos el nuevo
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Comentarios de la API</h1>

            <div className="space-y-2">
                {comments.map((comment) => (
                    <AccordionItem
                        key={comment.id}
                        comment={comment}
                        isOpen={activeId === comment.id} // 👈 pasamos si está abierto o no
                        onToggle={() => handleToggle(comment.id)} // 👈 manejador de clic
                    />
                ))}
            </div>
        </div>
    );
}
