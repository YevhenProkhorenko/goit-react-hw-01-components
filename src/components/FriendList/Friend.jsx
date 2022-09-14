import css from '../FriendList/Friends.module.css';
import PropTypes from 'prop-types';
const Friend = ({ isOnline, avatar, name }) => (
  <li className={css.friendList_item}>
    <span
      className={
        isOnline
          ? `${css.status} ${css.online}`
          : `${css.status} ${css.offline}`
      }
    >
      {isOnline}
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Friend;
