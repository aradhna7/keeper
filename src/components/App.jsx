import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,addnotes]=useState([]);

  function handleClick(inputText){
    //  console.log(inputText);
    addnotes(prevItems => {
      return[...prevItems, inputText];
      
    });}

    function deletenote(id){
      addnotes(prevItems=>{
       return prevItems.filter((note,index)=>{
          return index!==id
        })
      })
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />
      {notes.map((note,index)=>(
          <Note 
          key={index}
          id={index}
          
          title={note.title}
          content={note.content}
          delete={deletenote} />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
