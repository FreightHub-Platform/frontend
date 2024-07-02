'use client'

import Link from 'next/link';
import styles from './navLinks.module.css'
import { usePathname } from 'next/navigation';

const NavLinks = ({item}) => {

  const pathName = usePathname();

  return (
    <Link 
      href={item.path} className={styles.sign}>
        <button className={`${styles.signBtn} ${pathName === item.path && styles.active}`}>{item.title}</button>
    </Link>
      
  )
}

export default NavLinks