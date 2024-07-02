import Image from 'next/image'
import styles from './register.module.css'
import RegisterBox from '../../../components/register/RegisterBox'
import Navbar from '../../../components/navbar/Navbar'

const Register = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.left}>
        <RegisterBox />
      </div>
      <div className={styles.right}>
        <Image className={styles.img} src="/images/home-page-side.png" alt='' fill />
      </div>
    </div>
  )
}

export default Register