import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css'
import BooksContext from "./context/books";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <BooksContext.Provider value={5}>
        <App />
    </BooksContext.Provider>
)