import React from 'react';
import css from './App.module.css';
import user from '../Data/user.json';
import Profile from './Profile/Profile';
import DataStat from '../Data/statistics.json';
import Statistics from './Statistics/Statistics';
import Friends from '../Data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '../Data/transactions.json';
console.log(transactions);

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      className={css.container}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title={DataStat.title} stats={DataStat} />
      <FriendList friends={Friends} />
    </div>
  );
};
