import './Contacts.css';
import { ContactLink } from '../links/ContactLink/ContactLink';

export const Contacts = () => {
  const contactDetails = [
    {
      id: 1,
      link: 'mailto:kristyna.svandova@gmail.com',
      iconClass: 'fa-regular fa-envelope',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/krist%C3%BDna-%C5%A1vandov%C3%A1-38b3a270/',
      iconClass: 'fa-brands fa-linkedin',
    },
    {
      id: 3,
      link: 'https://github.com/Tynusak',
      iconClass: 'fa-brands fa-github',
    },
  ];
  return (
    <div className="contacts">
      {contactDetails.map((item) => (
        <ContactLink
          link={item.link}
          iconClass={item.iconClass}
          key={item.id}
        />
      ))}
    </div>
  );
};
