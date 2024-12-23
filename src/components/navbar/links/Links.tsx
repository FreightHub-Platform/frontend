import styles from './links.module.css'
import NavLinks from './navLinks/NavLinks';


const links = [
  {
    title: "SIGN UP",
    path: "/register",
  },
  {
    title: "SIGN IN",
    path: "/login",
  },
  
];

const Links = ({ onLinkClick }) => {
  return (
    <div className={styles.container}>
      {links.map(link => (
        <NavLinks item={link} key={link.title} onLinkClick={onLinkClick}/>
      ))}
    </div>  
  )
}

export default Links