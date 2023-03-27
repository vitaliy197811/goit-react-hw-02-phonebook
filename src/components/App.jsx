import { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => {
      const verificationContact = contacts.find(el => el.name.toLowerCase() === name.toLowerCase());

      if (!verificationContact) {
        return { contacts: [...contacts, { id: nanoid(), name, number, }, ] };
      } else {
        alert(`${name} is already in contacts`);
      }
    });
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.contacts}>Contacts</h2>
        <Filter 
          filter={this.state.filter} 
          onChange={this.changeFilter} />
        <ContactList
          contacts={this.showVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;