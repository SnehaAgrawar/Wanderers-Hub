import React from 'react';
import NavigationBar from './Navbar';
import Hero from './Hero';
import Destinations from './Destinations';
import Reviews from './Reviews';
import Footer from './Footer';
import '../css/styles.css'

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Destinations />
      <Reviews />
      <Footer />
    </div>
  );
}
