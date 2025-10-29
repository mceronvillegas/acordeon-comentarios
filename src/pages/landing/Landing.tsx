import { useNavigate } from "react-router";

export default function Landing() {
    const navigation = useNavigate();

    return (
        <div>
            <button onClick={() => navigation("/feed")} className="btn btn-secondary cursor-pointer bg-amber-700 hover:bg-amber-900">
                Estas en landing, click para ver productos
            </button>
        </div>
    );
}
