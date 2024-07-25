import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"



const Home = () => {
  return (
    <div className="home">
      <img src="https://www.sttc.com/wp-content/uploads/2019/04/st-1.jpg" alt="Freight Image" className="w-full" />
        <div className="flex-1 pt-36 padding-x">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Move Your Freight Quickly and Easily!
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-800 sm:text-4xl">The Best Freight Forwarding Solution For Your Enterprise...</p>
            <br />
            <center>
            <button className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-2xl">Sign Up Now</button>
            <br /><br />
            <button className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-2xl">Log In</button>
            </center>
            <br />
            <br />
            <p>Transforming Logistics for a Seamless Future
            In today’s fast-paced world, efficient logistics are more critical than ever. At FreightHub, we specialize in delivering innovative solutions that streamline your supply chain, reduce costs, and improve service quality. With decades of industry experience and a commitment to excellence, we’re your trusted partner in navigating the complexities of logistics.</p>
            
        </div>
        </div>
  )
}

export default Home