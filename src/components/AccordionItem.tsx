import type { CommentType } from "../types/CommentTypes";

type AccordionItemProps = {
    comment: CommentType;
    isOpen: boolean;
    onToggle: () => void;
};

export default function AccordionItem({ comment, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border border-gray-300 rounded-lg bg-blue-300 shadow-sm">
            <button onClick={onToggle} className="w-full text-left p-4 font-semibold hover:bg-blue-50 transition">
                {comment.name}
            </button>

            {isOpen && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 text-sm mb-1">{comment.body}</p>
                    <p className="text-xs text-gray-500 italic">{comment.email}</p>
                </div>
            )}
        </div>
    );
}
