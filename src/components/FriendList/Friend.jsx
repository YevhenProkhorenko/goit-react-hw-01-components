import css from '../FriendList/Friends.module.css';

const Friend = ({ isOnline, avatar, name }) => (
  <li className={css.friendList_item}>
    <span className={isOnline ? css.status_online : css.status_offline}>
      {isOnline}
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
export default Friend;
