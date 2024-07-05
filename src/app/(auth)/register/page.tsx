import Image from 'next/image'
import styles from './register.module.css'
import RegisterBox from '../../../components/Auth/register/RegisterBox'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'

const Register = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.left}>
        <RegisterBox />
        <Footer />
      </div>
      <div className={styles.right}>
        <Image className={styles.img} src="/images/home-page-side.png" alt='' fill />
      </div>
    </div>
  )
}

export default Register