import React, { createContext, useState } from 'react';

export const MailContext = createContext();

const MailContextProvider = (props) => {

    const[messages, setMessages] = useState([
       {
           id: 1, title: "test test"
       },
       {
           id:2, title: "best practice"
       }
    ]);

    const deleteMessage = (message) => {
        setMessages(messages.filter(msg => msg.id !== message.id));

    }

    return(
        <MailContext.Provider value={{messages, deleteMessage}}>
            {props.children}
        </MailContext.Provider>
    )

}

export default MailContextProvider;