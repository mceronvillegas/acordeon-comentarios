// ✅ Importamos el tipo CommentType
// Este tipo define la estructura que tiene cada comentario (id, name, email, body, etc.)
import type { CommentType } from "../types/CommentTypes";

// ✅ Definimos los props (propiedades) que el componente recibirá
// comment → el comentario individual que se mostrará
// isOpen → un booleano que indica si este acordeón está abierto o cerrado
// onToggle → función que se ejecuta al hacer clic para abrir/cerrar el acordeón
type AccordionItemProps = {
    comment: CommentType;
    isOpen: boolean;
    onToggle: () => void;
};

// ✅ Definimos el componente funcional AccordionItem
// Usamos destructuring para extraer directamente los props en los parámetros
export default function AccordionItem({ comment, isOpen, onToggle }: AccordionItemProps) {
    return (
        // 🔹 Contenedor principal del acordeón
        <div className="border border-gray-300 rounded-lg bg-blue-300 shadow-sm">

            {/* 🔹 Botón que muestra el título del comentario */}
            {/* Al hacer clic, llama a la función onToggle (pasada desde CommentsPage) */}
            <button
                onClick={onToggle}
                className="w-full text-left p-4 font-semibold hover:bg-blue-50 transition"
            >
                {comment.name} {/* 👈 Mostramos el nombre del comentario */}
            </button>

            {/* 🔹 Si "isOpen" es true, mostramos el contenido (cuerpo y correo) */}
            {isOpen && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    {/* Cuerpo del comentario */}
                    <p className="text-gray-700 text-sm mb-1">{comment.body}</p>

                    {/* Email del autor del comentario */}
                    <p className="text-xs text-gray-500 italic">{comment.email}</p>
                </div>
            )}
        </div>
    );
}

