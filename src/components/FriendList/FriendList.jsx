import Friend from '../FriendList/Friend';
import css from '../FriendList/Friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
