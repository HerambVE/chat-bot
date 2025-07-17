export default function Btn(props){
    <div className="py-6">
        <Link to="/chat"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {props.text}
        </Link>
    </div>
}