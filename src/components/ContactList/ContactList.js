import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ol className={styles.list}>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span className={styles.phonenumber}>{number}</span>
            <button
              type="button"
              className={styles.button}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;