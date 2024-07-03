import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import styles from './email_verification.module.css'
import Verification from '../../../components/verification/Verification'


const EmailVerification = () => {
  return(
    <div className={styles.container}>
      <Navbar />
      <div className={styles.left}>
        <Verification />
      </div>
      <div className={styles.right}>
        <Image className={styles.img} src="/images/home-page-side.png" alt='' fill />
      </div>
    </div>
  )
}

export default EmailVerification