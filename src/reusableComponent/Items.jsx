import React from 'react';
import PropTypes from 'prop-types';
import '../styles/items.scss';

const Items = (props) => {
  const { title } = props;
  return (
    <section className="title-container">
      <div className="title">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

Items.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
};

export default Items;
