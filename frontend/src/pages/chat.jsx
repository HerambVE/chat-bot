import SearchBox from '../component/searchbox'
import Box from '../component/messageBox'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


export default function Chat(){

  const messagesEndRef = useRef(null);
  let[message,setMessage]=useState([
    {
      id:Date.now(),
      usertext:"This is test message",
      replytext:"Your friendly chatbot replies this was"
    }
  ]);

  const sent = (newMessageText , aiResponse) =>{
    const newMessage = {
        id:Date.now(),
        usertext:newMessageText,
        replytext: aiResponse,
      }    
      setMessage(prevMessages => [...prevMessages, newMessage]);
    };
  

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);



    return(
      <>
        <header className="flex justify-end">
            <Link to='/' className="w-[10%] h-[2.6em] m-1 rounded-2xl py-[1%] text-xl/6 font-semibold text-gray-900 hover:bg-gray-100"><span aria-hidden='true'>&larr;</span>Home</Link>
        </header>
        <div aria-hidden="true" className="fixed inset-x-0 -top-40 -z-10 isolate transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{ clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-288.75"/>
        </div>
        <div className='m-0 p-0'>
              <div className="flex-box isolate justify-self-center w-[100%] h-[85vh]">


                  <div className='box place-content-end justify-self-center w-[100%] border-[1px] border-gray-400 rounded-xl p-4 bg-[rgba(250,250,250,50%)] h-[100%]'>
                    <section className="bg-[rgba(253,253,253,80%)] h-[85%] backdrop-blur-md flex-box rounded-2xl overflow-y-auto max-h-[85%]">
                    {
                      message.map((item)=>{
                      console.log(item.replytext);
                      return(<Box key={item.id} message={item}/>)})
                    }           
                    </section>
                  
                    <section>
                    <SearchBox func={sent}/>
                    </section>
                  </div>

                
                <p className='justify-self-center absolute mt-1 opacity-50'>This is a generated text please fuck off</p>
              </div>
        </div>
        <div aria-hidden="true" className="fixed inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]">
            <div style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-288.75"/>
        </div>
      </>
    )
}