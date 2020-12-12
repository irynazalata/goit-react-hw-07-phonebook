import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactsList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ searchContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {searchContact.map(({ id }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <ContactsListItem id={id}></ContactsListItem>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return {
    searchContact: filteredContacts,
  };
};
export default connect(mapStateToProps)(ContactsList);
