import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a href="#">
        <Icon icon={Icons.GITHUB} alt={'GitHub'} />
      </a>
      <a href="#">
        <Icon icon={Icons.MEDIUM} alt={'Medium'} />
      </a>
      <a href="#">
        <Icon icon={Icons.TWITTER} alt={'Twitter'} />
      </a>
    </span>
  </header>
);

export default Header;
