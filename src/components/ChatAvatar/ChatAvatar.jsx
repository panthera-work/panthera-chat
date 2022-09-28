import React from 'react';

const ChatAvatar = ({avatar_image}) => {
    return (
        <div className="chat_avatar">
            <img src={avatar_image} alt="аватар чата"/>
        </div>
    );
};

export default ChatAvatar;