import React from 'react';
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="relative w-full h-screen">
        <img src="/images/homefleet.jpg" alt="Home Fleet" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white">
        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl mt-36 mb-5">FreightHub</h1>
        <br /><br /><br /><br /><br />
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">Move Your Freight Quickly and Easily!</h1>
          <p className="mt-6 text-medium leading-8 sm:text-3xl">The Best Freight Forwarding Solution For Your Enterprise...</p>
          <br /><br /><br />
          <button className="rounded-md mt-10 bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-2xl">
            Sign Up Now!
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 pt-36">
        
        <br /><br />
        <p className="text-lg text-gray-700">
          Transforming Logistics for a Seamless Future
          In today’s fast-paced world, efficient logistics are more critical than ever. At FreightHub, we specialize in delivering innovative solutions that streamline your supply chain, reduce costs, and improve service quality. With decades of industry experience and a commitment to excellence, we’re your trusted partner in navigating the complexities of logistics.
        </p>
      </div>
      
      <section className="services py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Why FreightHub?</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="service-card p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Fast and Efficient Transportation</h3>
                <p className="text-gray-700">Fast and reliable freight services to meet your tight deadlines.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="service-card p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Real Time Updates</h3>
                <p className="text-gray-700">Track the progress of your freight transports in real time</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="service-card p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Thousands of Vehicles at your desktop</h3>
                <p className="text-gray-700">Access to the largest catalogue of heavy vehicles to suit your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">About Us</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full md:w-2/3 p-4">
              <p className="text-lg text-gray-700">FreightHub is a leading provider of logistics solutions, with a focus on innovation, efficiency, and customer satisfaction. Our team of experienced professionals is dedicated to delivering the highest quality service to meet your logistics needs. From air and ocean freight to land transportation, we offer a comprehensive range of services to help you succeed in today's competitive market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Testimonials</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="testimonial-card p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700">\"FreightHub has transformed our logistics operations, making them more efficient and cost-effective."</p>
                <p className="mt-4 font-bold">- John Doe, CEO of Logistics Co.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="testimonial-card p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-700">"The best freight forwarding service we've ever used. Highly recommended!"</p>
                <p className="mt-4 font-bold">- Jane Smith, Supply Chain Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Contact Us</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full md:w-2/3 p-4">
              <form className="contact-form bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-lg" type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" id="message"  placeholder="Your Message"></textarea>
                </div>
                <button className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-2xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  )
}

export default Home;
