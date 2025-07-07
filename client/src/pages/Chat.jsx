import { useContext } from "react";
import { ChatContext } from "../Context/chatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/userChat";
import { AuthContext } from "../Context/AuthContext";

const Chat = () => {

    const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext)

    const {user} = useContext(AuthContext)

    console.log("User Chats", userChats)
    return <div className="text-white"><Container>
        {userChats?.length < 1 ? null : <Stack direction="horizontal" gap={4} className="align-items-start">
            <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                {isUserChatsLoading && <p>Loading chats...</p>}
                {userChats?.map((chat,index)=>{
                    return (
                        <div key={index}>
                            <UserChat chat={chat} user={user}/>
                        </div>
                    )
                })}
            </Stack>
            <p>ChatBox</p>
            </Stack>}
    </Container>
    </div>
}
 
export default Chat;