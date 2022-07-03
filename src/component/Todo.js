import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  
  const onChange=(e)=>{
    setText(e.target.value)
   };
   const noteAdded=(e)=>{
    e.preventDefault()
    if(text.length !== 0){
    setList([...list,text])
    setText('')}
    };
    const noteDeleted=(id)=>{
      console.log(id)
      const updatelist=list.filter((item,ind)=>{
        return ind !== id
      })
      setList(updatelist)
     };

  return (
    <div className="px-6 py-12 mx-auto">
    <h1 className="text-center text-3xl font-bold" >Todo</h1>
    
     <form onSubmit={noteAdded}>
    <div className="flex justify-center items-center mt-10 py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
       
        <textarea value={text} onChange={onChange}id="chat" rows="1" className="block mx-4 p-2.5 w-1/3 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-800 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
    </div>
    </form>
<div className="mt-10">
          {list.map((item,ind)=>{
            return <div key={ind}>
    <div className="flex justify-center items-center mt-10 py-2 px-3">
       
        <div className="text-start py-3 px-36 border rounded border-gray-300 hover:bg-blue-500">{item}</div>
            <button onClick={()=> noteDeleted(ind)} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            Delete
        </button>
    </div>  
    </div>  
          })}
          
      
</div>
</div>
  );
};

export default Todo;
