import { useNightMode } from '../NightModeContext';
import './Footer.css';

const Footer = () => {
  const { isNightMode } = useNightMode();
  const modeClass = isNightMode ? 'night-mode' : '';

  return (
    <footer className={`footer ${modeClass}`}>
      <p>&copy; 2023 Florian Van Camp. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
