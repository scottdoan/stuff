import React from 'react';

function HomePage() {
  return (
    <div>
   
   <div className="hero py-14 bg-base-200"> {/* Full-screen hero with background */}
      <div className="hero-content text-center"> {/* Center content */}
        <div className="max-w-3xl"> {/* Limit width of content */}
          <h1 className="text-5xl font-bold">Welcome to SquawkChirp!</h1>
         
          <p className="pt-6 pb-0 text-justify" >
          Are you captivated by the vibrant plumage of a hummingbird or the melodic song of a warbler?  
          At SquawkChirp, we share your passion for all things avian.  Dive into our comprehensive database of bird species, 
          learn about their habitats and behaviors, and connect with a community of bird lovers just like you.  
          From backyard birdwatching tips to global conservation efforts, SquawkChirp is your go-to resource for everything bird-related.
          </p>
          
          <img src="/assets/img/sqch.png" className="mx-auto block pt-4 pb-10" />
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary ml-4">Learn More</button> {/* Added secondary button with margin */}
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default HomePage;
