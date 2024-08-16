import React from 'react';
import NavigationBar from './Navbar';
import Hero from './Hero';
import Destinations from './Destinations';
import Reviews from './Reviews';
import Header from './Header';
import Footer from './Footer';
import '../css/styles.css'


export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <NavigationBar />
    <Hero />
    <br/>
    <Destinations />
    <br/>
    <Reviews />
</div>
  )
}
