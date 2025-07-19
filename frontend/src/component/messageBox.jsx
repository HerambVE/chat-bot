export default function Box(props){
    if(props.content == "user")
    return(
        <>
            <div className="bg-amber-400">
            <div className="">{message.usertext}</div>
            <p>{message.id}</p>
            <div className="">{message.replytext}</div>
            </div>
        </>
    );
}