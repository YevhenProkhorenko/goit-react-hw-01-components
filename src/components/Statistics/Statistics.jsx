import PropTypes from 'prop-types';
import React from 'react';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title ?? <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(element => (
        <li className={css.statList_item} key={element.id}>
          <span className={css.label}>{element.label}</span>
          <span className={css.percentage}>{element.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
