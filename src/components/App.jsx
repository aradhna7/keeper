import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";




function App(){
    return    <div>
        <Header />
        <Footer />
        {notes.map(n=> <Note
        key={n.key}
        title={n.title}
        content={n.content}
        />
        )}
    </div>;
}

export default App;