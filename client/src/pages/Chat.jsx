import { useContext } from "react";
import { ChatContext } from "../Context/chatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/userChat";
import { AuthContext } from "../Context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";
import ChatBox from "../components/chat/chatBox";

const Chat = () => {

    const {userChats, isUserChatsLoading, updateCurrentChat} = useContext(ChatContext)

    const {user} = useContext(AuthContext)

    return <div className="text-white"><Container>
        <PotentialChats/>
        {userChats?.length < 1 ? null : <Stack direction="horizontal" gap={4} className="align-items-start">
            <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                {isUserChatsLoading && <p>Loading chats...</p>}
                {userChats?.map((chat,index)=>{
                    return (
                        <div key={index} onClick={() => updateCurrentChat(chat)}>
                            <UserChat chat={chat} user={user}/>
                        </div>
                    )
                })}
            </Stack>
            <ChatBox/>
            </Stack>}
    </Container>
    </div>
}
 
export default Chat;