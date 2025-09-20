export default function Box({message}) {
    return (
        <div className="p-2 mx-3 my-0 rounded-lg flex-box">
            <p className="text-xs text-gray-500 m-1">ID: {message.id}</p>
            <div className="font-semibold text-amber-50 bg-blue-400 m-[1%] w-[fit] max-w-[60%] h-[fit] px-5 py-4 text-left justify-self-end rounded-bl-3xl rounded-br-3xl rounded-tl-3xl">{message.usertext}</div>
            <div className="font-semibold text-amber-50 bg-blue-400 m-[1%] w-[fit] max-w-[60%] h-[fit] px-5 py-4 text-left justify-self-start rounded-bl-3xl rounded-br-3xl rounded-tr-3xl">{message.replytext}</div>
        </div>
    );
}