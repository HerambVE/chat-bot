import './chat.css';
import SearchBox from '../component/searchbox'
export default function Chat(){
    return(
        <div className="bg-black flex justify-center h-screen p-10">
            <div className='place-content-end w-10/12 bg-amber-900 px'>
            <SearchBox/>
            </div>
        </div>
    )
}