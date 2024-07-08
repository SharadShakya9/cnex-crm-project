import { message } from "antd";
import { createContext } from "react";


export const AppContext = createContext('')

export const AppContextProvider = ({children}) => {
    const [messageApi, contextHolder] = message.useMessage()
    const key = 'updatable'

    const openMessage = (type, content) => {
        messageApi.open({
            key,
            type: type,
            content: content,
            duration: 2,
        })
    }

    return (
        <AppContext.Provider value={{openMessage}}>
            {contextHolder}
            {children}
        </AppContext.Provider>
    )
}