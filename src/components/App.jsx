import Profile from "./Profile/Profile";
import userData from "../data/userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../data/friendsData.json"
import TransactionHistory from "./TransactionsHistory/TransactionsHistory";
import transactions from "../data/transactionsData.json"

function App() {
    return (
        <div>
            <Profile
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
             <FriendList friends={friends} />
             <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;
