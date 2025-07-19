import { useState} from "react";
export default function SearchBox({func}){

    let [text, setText] = useState();

    const handleInput = (event) => {
        setText(event.target.value);
    }

    const sendMessage = async () => {
    if (!text || text.trim() === "") return;
    try {
      const res = await fetch('http://localhost:6969/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      const data = await res.json();
      func(text, data.reply);
      setText("");
     }catch (err) {
      console.error("Error fetching response: \n", err);
     }
    };


    return(
        <div className='bg-gray-300 m-3 flex rounded-xl justify-center justify-self-center w-[90%] isolate align-middle py-4'>
            <textarea className='bg-white rounded-2xl p-[1em] focus:outline-none overflow-y-hidden ml-1 min-w-[70%]' name="" id="txt-inputbx" cols="70" rows="1" placeholder='Hello, How are you' value={text} onChange={handleInput}/>
            <label className='bg-white rounded-2xl border m-1 max-h-12.5 border-gray-300 flex px-3 cursor-pointer' htmlFor="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto h-6 bg-white text-blue-600" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" fill="currentColor"/>
                </svg>
            </label>
            <input type="button" id="submit" value="" onClick={sendMessage}/>
        </div>
    )
}