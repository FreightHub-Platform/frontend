import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import styles from './login.module.css'
import LoginBox from '../../../components/login/Login'
import Footer from '../../../components/footer/Footer'

const Login = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.left}>
        <LoginBox />
        <Footer />
      </div>
      <div className={styles.right}>
        <Image className={styles.img} src="/images/home-page-side.png" alt='' fill />
      </div>
    </div>
  )
}

export default Login