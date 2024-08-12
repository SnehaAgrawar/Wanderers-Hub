import React from 'react'

export default function Footer() {
  return (

    <div className="flex flex-col min-h-screen">
      <main className="flex-1"> {/* Add any content here */}</main>
      <footer className="items-left bg-gray-200 py-4 p-4">
        <h6>Description:</h6>
        <h6>Contact Us: <a href="mailto:madhuramd15@gmail.com">Mail</a></h6>
        <h6>Github: <a href='https://github.com/SnehaAgrawar/Wanderers-Hub.git'>Wanderer's Hub</a></h6>
        <h6>LinkedIn: <a href='https://www.linkedin.com/in/sneha-agrawar-175993267/'>Sneha</a> <br /> <a href='https://www.linkedin.com/in/madhuradanke'>Madhura</a> </h6>
      </footer>
    </div>
 
  )
}
