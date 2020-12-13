import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './shared/Title/Title';
import Loader from './shared/Loader/Loader';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import contactsOperations from './redux/contacts/contactsOperations';
import contactsSelectors from './redux/contacts/contactsSelectors';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Title title="phonebook" />
        <Form />
        {this.props.isLoading && <Loader />}
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
