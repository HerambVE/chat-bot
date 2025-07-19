export default function Box({message}) {
    return (
        <div className="p-2 m-2 rounded-lg flex-box">
            <p className="text-xs text-gray-500 m-1">ID: {message.id}</p>
            <div className="font-semibold text-amber-50 bg-blue-400 m-1 w-[fit] h-[fit] px-5 py-4 justify-self-end rounded-bl-3xl rounded-br-3xl rounded-tl-3xl">User: {message.usertext}</div>
            <div className="font-semibold text-amber-50 bg-blue-400 m-1 w-[fit] h-[fit] px-5 py-4 justify-self-start rounded-bl-3xl rounded-br-3xl rounded-tr-3xl">Reply: {message.replytext}</div>
        </div>
    );
}