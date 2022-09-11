import PropTypes from 'prop-types';
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
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default FriendList;
