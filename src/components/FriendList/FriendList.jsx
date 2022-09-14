import Friend from '../FriendList/Friend';
import css from '../FriendList/Friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <Friend
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    ))}
  </ul>
);

export default FriendList;
