import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendItem}>
          <img className={css.friendImg} src={friend.avatar} alt="Avatar" />
          <p className={css.friendName}>{friend.name}</p>
          <p className={`${css.friendStatus} ${friend.isOnline ? css.Online : css.Offline}`}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
