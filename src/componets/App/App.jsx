import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transaction.json"


export default function App  ()  {
  return (
    <>
      <h2>Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Task 2</h2>
      <FriendList friends={friends} />
      <h2>Task 3</h2>
      <TransactionHistory items={transactions}/>
    </>
  );
}