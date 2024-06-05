import './MessageBubbleTriangle.css'

const MessageBubbleTriangle = (props) => {
    return <div className={`triangle ${props.triangleClassName}`}>
        <div className='first'>
            <div className='light second'>
                <div className='third'>
                    <div className='light fourth'>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MessageBubbleTriangle;

