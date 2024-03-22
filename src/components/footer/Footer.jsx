import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer`}>
      <p>&copy; {currentYear} Florian Van Camp. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
