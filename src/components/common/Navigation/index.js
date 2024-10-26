import style from './style.module.scss';

const Navigation = ({ links, className }) => {
  return (
    <nav>
      <ul className={`${style['list']} ${className}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={style['link']}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
