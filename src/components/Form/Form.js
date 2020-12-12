import React, { Component } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/operations/contactsOperations';
import Notification from '../../shared/Notification/Notification';

class Form extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    contactExists: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    if (this.props.contacts.find(({ name }) => name === contact.name)) {
      this.setState({ contactExists: true });
      setTimeout(() => this.setState({ contactExists: false }), 1500);
      return;
    }
    this.props.addContact(contact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number, contactExists } = this.state;
    return (
      <>
        <Notification contactExists={contactExists} />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              placeholder="Enter your full name"
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
              placeholder="xxx-xx-xx"
              className={styles.input}
              required
            />
          </label>
          <input type="submit" value="Add contact" className={styles.button} />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
