import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.contacts}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
                <p className={css.text}>{name}: {number}</p>
                <button className={css.button} type="submit" onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;