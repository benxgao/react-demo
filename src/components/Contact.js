import React, { PropTypes } from 'react';

const Contact = ({
  classes,
  contact,
}) => {
  const company = contact.get('company').get('name');
  const email = contact.get('email');
  const name = contact.get('name');
  const phone = contact.get('phone');
  const website = contact.get('website');
  const slogan = contact.get('company').get('bs');

  return (
    <div className={classes}>
      <div className="namecard">
        <div className="namecard__header">
          <div className="namecard__header-name">{name}</div>
          <div className="namecard__header-subtitle">{company}</div>
        </div>
        <div className="namecard__body">
          <div className="namecard__body-wrapper">
            <div className="namecard__item namecard__item--head">{slogan}</div>
            <div className="namecard__item"><b>Phone:</b> {phone}</div>
            <div className="namecard__item"><b>E-mail:</b> {email}</div>
            <div className="namecard__item"><b>URL:</b> {website} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
};

Contact.displayName = 'Contact';

export default Contact;
