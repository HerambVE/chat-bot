import SearchBox from '../component/searchbox'
import { Link } from 'react-router-dom'
export default function Chat(){
    return(
        <div className='m-0 p-0'>
        <header className="fixed z-10 flex end-13">
            <Link to='/' className="p-3 flex-11/12 rounded-2xl text-xl/6 font-semibold text-gray-900"><span aria-hidden='true'>&larr;</span>Home</Link>
        </header>
        <div className="flex isolate justify-center h-[90vh]">
            <div
          aria-hidden="true"
          className="fixed inset-x-0 -top-40 -z-10 isolate transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>



            <div className='box place-content-end w-10/12 border-[1px] border-gray-400 rounded-xl p-2 bg-[rgba(250,250,250,50%)] h-[100%]'>
            <SearchBox/>
            </div>


        

        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]">
            <div
                style={{clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
            </div>
        </div>
        <p className='justify-self-center z-10 absolute mt-3 opacity-50'>This is a generated text please fuck off</p>
        </div>
    )
}