/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import banner from '../assets/images/mainimage.jpg';
import men from '../assets/images/men.jpeg';
import women from '../assets/images/women.jpeg';
import Logo1 from '../assets/images/Logo1.jpeg';
import pool from '../assets/images/Pool.jpeg';
import bornagain from '../assets/images/BornAgain1.jpeg'
import evangelism1 from '../assets/images/Evangelism.jpeg';
import phone from '../assets/images/mainphone.png';
import '../assets/style/Home.css';


function Home() {
  useEffect(() => {
    const addScrollAnimations = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1
      });

      elements.forEach(element => observer.observe(element));
    };

    addScrollAnimations();
  }, []);

  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto mt-8 p-24 fade-in flex flex-col items-center justify-center text-center">
      <h1 className="text-xl md:text-4xl font-bold text-center mx-0 sm:mx-10 md:mt-16">Welcome to Victorious Crossover<br />where victims are turned into<br />Victor's 1John 5:4-5</h1>
        <p className=" text-sm md:text-lg text-gray-700 text-center mt-4">
          Join our community of believers, sharing insights and inspiration.<br /> Connect with us today!
        </p>
        
        <div className="mt-8 flex flex-col items-center">
          <Link to="/SignUp">
            <button className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300">
              Join Us
            </button>
          </Link>
          <div className="pt-4 rounded-[50px] w-full max-w-[2000px] max-h-[600px]">
            <img
              src={banner}
              alt="banner"
              className="w-[600px] h-[260px] md:w-full md:h-[500px] object-cover rounded-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="mx-20 slide-in-left">
        <h2 className="text-yellow-600 text-3xl md:text-4xl">Our Purpose</h2>
        <p className="text-3xl md:text-4xl pt-4">
        We exist to ignite the wells of Revival<br />through reaping a great Harvest of souls<br />for the kingdom of God and through spiritual discipleship
        </p>
      </div>

      <div className="flex flex-col justify-center items-center slide-in-right delay-200">
        <h1 className="text-3xl md:text-5xl pt-24">Reach Out</h1>
        <p className="pt-4 text-gray-600">Connect with us</p>
        <div className="pt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
  <input
    type="text"
    placeholder="Enter your message here..."
    className="border rounded-lg h-10 outline-gray-400 focus:outline-none w-[250px] sm:w-[300px]"
  />
  <button className="bg-yellow-400 text-black p-2 rounded-[10px] w-[120px] sm:w-[150px]">
    Send
  </button>
</div>
      </div>

      <div className="mx-12 pt-[150px] fade-in">
  <h1 className="text-xl md:text-3xl">Our Ministries</h1>
  <p className="text md:text-xl text-gray-600 pt-4">
    We invite you to get involved in one or more of our ministries. Together, we can make a meaningful difference in our church and community. Reach out to the ministry leaders or sign up today to be part of what God is doing!
  </p>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 p-20 ml-[-20px] md:ml-0">
    <div className="bg-white shadow-lg rounded-lg w-[300px] h-[300px] md:w-[600px] md:h-[500px] slide-in-left">
      <div className="p-3 text-center">
        <h2 className="text md:text-xl font-semibold text-yellow-600">Prophetic Ministry</h2>
      </div>
      <div className="w-[300px] h-[300px] md:w-full md:h-[500px] bg-gray-300 rounded-b-lg">
        <img src={men} alt="men" className="object-cover w-full h-full rounded-b-lg" />
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg w-[300px] h-[300px] md:w-[600px] md:h-[500px] slide-in-right">
      <div className="p-4 text-center">
        <h2 className="text md:text-xl font-semibold text-yellow-600">Women's Ministry</h2>
      </div>
      <div className="w-[300px] h-[300px] md:w-full md:h-[500px] bg-gray-300 rounded-b-lg">
        <img src={women} alt="women" className="object-cover w-full h-full rounded-b-lg" />
      </div>
    </div>
  </div>
</div>

<div className="pt-4 slide-in-left">
  <h1 className="text-center text-2xl md:text-4xl text-yellow-600">Jesus Ministry</h1>
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 mx-14 gap-6 ml-[-20px] md:ml-0">
    <div className="bg-white shadow-lg rounded-lg w-[300px] h-[300px] md:w-[600px] md:h-[500px]">
      <img
        src={Logo1}
        alt="Jesus Ministry"
        className="object-cover w-[300px] h-[300px] md:w-full md:h-[550px] rounded-lg md:ml-0 ml-[32px]"
      />
    </div>
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl md:text-2xl font-bold text-yellow-600 md:ml-0 ml-[60px]">About Jesus Ministry</h2>
      <p className="text-gray-600 md:mt-4 md:ml-0 ml-[57px]">
      The purpose of this program is to reveal the person of Jesus Christ. Believers all around the world confess Jesus but only a few know Him. This program is aimed at teaching believers who Jesus is and how to build a relationship with Him. The strength of the Christian life is based on the intimate knowledge and experience of Jesus Christ. 
      </p>
    </div>
  </div>
</div>

<div className="slide-in-right">
  <h1 className="text-center text-4xl text-yellow-600 p-24">Born Again Program</h1>
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 mx-14 gap-6">
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-yellow-600">About the Born Again Program</h2>
      <p className="text-gray-600 mt-4">
      The Born Again program is a discipleship program for new converts in the faith. This program aims to teach believers about what it means to be born again. The purpose of this program is to ensure that every new convert in the faith grows to the true maturity of becoming a true Disciple of Jesus Christ. Believers will be equipped with the right resources and knowledge on how they should live to please our Lord and Saviour every single day of their life's.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-lg w-[300px] h-[300px] md:w-[600px] md:h-[500px]">
      <img 
        src={pool} 
        alt="Pool" 
        className="object-cover w-full h-full rounded-lg" 
      />
    </div>
  </div>

  {/* New image below the text explanation */}
  <div className="bg-white shadow-lg rounded-lg w-[300px] h-[300px] md:w-[600px] md:h-[400px] mx-12 md:mt-0 mt-[40px] md:ml-0 ml-[30px]">
    <img 
      src={bornagain}  
      alt="Image Description"  
      className="object-cover w-full h-full rounded-lg" 
    />
  </div>
</div>



      <div className="pt-8 fade-in">
        <h1 className="text-center text-4xl text-yellow-600 px-14">Evangelism</h1>
        <div className="flex flex-col md:flex-row items-start justify-start mt-4 mx-14 gap-6">
          <div className="bg-white shadow-lg rounded-lg w-full md:w-[500px] h-[500px]">
            <img 
              src={evangelism1} 
              alt="evangelism1" 
              className="object-cover w-full h-full rounded-lg" 
            />
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-600">About Evangelism</h2>
            <p className="text-gray-600 mt-4">
            Matthew 9:37 NKJV 
Then He said to His disciples, “The harvest truly is plentiful, but the laborers are few. 
The ministry of Evengelism is a responsibility that has been forsaken in the morden day church. This program aims to restore that responsibility by teaching believers how to win souls according to the Apostlic blueprint that the early Church in the book of Acts left for us.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center items-center p-24 slide-in-left">
        <h1 className="text-center text-4xl">Our Vision</h1>
        <p className="text-center pt-4 text-gray-500">
          Guiding believers towards a deeper relationship with God.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-between pt-20">
          <div className="md:w-1/2 space-y-8">
            <div>
              <h1 className="text-left text-4xl p-2">Prophetic Insights</h1>
              <p className="text-left text-gray-500">
                Receive divine messages that inspire and guide your<br /> life.
              </p>
            </div>
            <div>
              <h1 className="text-left text-4xl p-2">Priestly Ministry</h1>
              <p className="text-left text-gray-500">
                Experience the power of prayer and intercession.
              </p>
            </div>
            <div>
              <h1 className="text-left text-4xl p-2">Community Support</h1>
              <p className="text-left text-gray-500">
                Join a network of believers supporting each other.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={phone}
            alt="phone"
            className="w-full h-auto object-cover sm:w-[1000px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] max-w-[2000px]"
            />

          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <div className="w-full max-w-screen-md border-t border-gray-300"></div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto w-[90%] sm:w-[80%] md:w-full flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left">
      <p className="text-sm">© 2025 All Rights Reserved.</p>
    </div>
    <div className="text-center py-4 md:py-0">
      <p className="text-sm">
        Built with ❤️ by 
        <a 
          href="https://github.com/ShawnTheCreator" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-400 hover:underline"
        >
              Shawn
        </a>
      </p>
    </div>
    <div className="text-center md:text-right">
      <a 
        href="https://github.com/ShawnTheCreator" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-yellow-400 hover:underline text-sm"
      >
        Visit my GitHub
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Home;