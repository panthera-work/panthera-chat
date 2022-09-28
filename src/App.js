import "./styles/style.css"
import ChatLists from "./components/ChatList/ChatLists";
function App() {
    return (
        <div className="App">
            <ChatLists />
            <div className="chat_info">
                определенный чат
            </div>
            <div className="chat">
                сообщения чата
            </div>

        </div>
    );
}

export default App;
