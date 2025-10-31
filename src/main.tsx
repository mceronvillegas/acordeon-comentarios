import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./reducers/store";
import CommentsPage from "./pages/CommentsPage"; // 👈 usamos la página directamente
import "./index.css"; // Tailwind + DaisyUI

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* 🔹 Envolvemos toda la app con Redux Provider */}
        <Provider store={store}>
            <div className="min-h-screen bg-base-100 text-base-content">
                <CommentsPage /> {/* 👈 página principal */}
            </div>
        </Provider>
    </React.StrictMode>
);
