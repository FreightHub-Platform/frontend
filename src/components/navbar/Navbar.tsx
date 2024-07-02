import Link from 'next/link';
import Image from 'next/image'
import styles from './navbar.module.css'

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
      <div className={styles.right}>
      <Link href="/login" className={styles.sign}><button className={styles.signBtn}>SIGN IN</button></Link>
      <button className={styles.signBtn}>SIGN UP</button>
      </div>
    </div>
  )
}

export default Navbar