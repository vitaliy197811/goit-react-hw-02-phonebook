import {Component} from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    static = {
        onSubmit: PropTypes.func,
    }

    handleChange = name => e => {
        this.setState(() => ({[name]: e.target.value}));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState(() => ({
            name: '',
            number: '',
        }));
    };

    render() {
        const { name, number } = this.state;
        return (
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
            <label className={css.label}>Name
                <input
                    className={css.input}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    name="name"
                    value={name}
                    onChange={this.handleChange('name')}
                    placeholder="Rosie Simpson"
                />
            </label>
            <label className={css.label}>Number
                <input
                    className={css.input}
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    name="number"
                    value={number}
                    onChange={this.handleChange('number')}
                    placeholder="459-12-56"
                />
            </label>
            <button type="submit" className={css.button}>Add contact</button>
        </form>
        );
    }
}

export default ContactForm;