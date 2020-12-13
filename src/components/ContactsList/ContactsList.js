import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import styles from './ContactsList.module.css';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
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

const mapStateToProps = state => ({
  searchContact: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactsList);
