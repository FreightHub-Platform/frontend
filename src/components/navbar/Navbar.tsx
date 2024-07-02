import Image from 'next/image'
import styles from './navbar.module.css'
import Links from './links/Links';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src='/images/logo.jpeg' alt='' width={40} height={40}/>
        </div>
        <div className={styles.companyName}>FreightHub</div>
      </div>
      <div className={styles.middle}>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>ABOUT</button>
        <button className={styles.btn}>FAQ</button>
      </div>
      <Links /> 
    </div>
  )
}

export default Navbar