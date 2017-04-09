import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Contact from './Contact';
import Preloader from './Preloader';

const Contacts = ({
  activedContact,
  contacts,
  isLoading,
  onContactDetails,
}) => {
  const onClick = (contact) => {
    onContactDetails(contact);
  };

  const preloaderView = (
    <div className="preloader-container">
      <Preloader />
    </div>
  );

  const isContactShowing = contact => contact.get('id') === activedContact.get('id');

  const listItemStyles = contact => classnames({
    contacts__li: true,
    'contacts__li--active': isContactShowing(contact),
  });

  const nameCardPanelStyles = contact => classnames({
    'contacts__namecard-panel': true,
    'contacts__namecard-panel--active': isContactShowing(contact),
  });

  const contactList = contacts.map((contact) => {
    const id = contact.get('id');
    const name = contact.get('name');
    const classes = nameCardPanelStyles(contact);

    return (
      <div key={id}>
        <div className={listItemStyles(contact)} onClick={() => onClick(contact)}>
          <div className="contacts__li-name">{name}</div>
        </div>
        <Contact contact={contact} classes={classes} />
      </div>
    );
  });

  const contactsView = (
    <div className="contacts">
      {contactList}
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {isLoading ? preloaderView : contactsView}
      </div>
    </div>
  );
};

Contacts.propTypes = {
  activedContact: PropTypes.object.isRequired,
  contacts: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onContactDetails: PropTypes.func.isRequired,
};

Contacts.displayName = 'Contacts';

export default Contacts;
