import Image from 'next/image'
import styles from './navbar.module.css'
import Links from './links/Links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({onLinkClick}) => {

  const path = usePathname();
  console.log(path)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src='/images/logo.jpeg' alt='' width={40} height={40}/>
        </div>
        <div className={styles.companyName}>FreightHub</div>
      </div>
      <div className={styles.middle}>
        <Link href="/" onClick={path !== '/' ? onLinkClick : null}><button className={styles.btn}>HOME</button></Link>
        <button className={styles.btn}>ABOUT</button>
        <button className={styles.btn}>FAQ</button>
      </div>
      <Links onLinkClick={onLinkClick}/> 
    </div>
  )
}

export default Navbar