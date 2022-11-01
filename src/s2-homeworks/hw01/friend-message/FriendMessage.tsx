import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
src='data:image/jpeg;base64,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'
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        Ivan
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Hello, how are you, what did you do yesterday?
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                9:00
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
