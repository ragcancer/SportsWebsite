import React, { useState } from 'react'
import Navbar from './Navbar'
import web from '../src/Images/Image4.png'
import web1 from '../src/Images/image.png'
import web2 from '../src/Images/Image5.png'
import web3 from '../src/Images/neeraj.png'
import web4 from '../src/Images/archer.png'
import web5 from '../src/Images/stadium.png'
import web6 from '../src/Images/d3.png'
import web7 from '../src/Images/d2.png'
import web8 from '../src/Images/d1.png'
import web9 from '../src/Images/tracker.png'
import web10 from '../src/Images/blue.png'
import v1 from '../src/Images/Item.svg'
import v2 from '../src/Images/Item (1).svg'
import v3 from '../src/Images/Item (2).svg'
const Home = () => {

  return (
    <>
      <div className='overflow1'>
        <div className='back1'>
          <div class="container">
            <div className='row pt-3 pb-3'>
              <div className='col-4'><p className='text-light'><img src={v1}></img>&nbsp;<br className='displayer1'></br>The Strand 14 Sector,<br className='displayer1'></br>Faridabad,Haryana</p></div>
              <div className='col-4'><p className='text-light'><img src={v2}></img>&nbsp;<br className='displayer1'></br>Send an email,<br className='displayer1'></br>helpus24<br className='displayer1'></br>@gmail.com</p></div>
              <div className='col-4'><p className='text-light'><img src={v3}></img>&nbsp;<br className='displayer1'></br>Helpline and Support-8857002451</p></div>

            </div>
          </div>
        </div>
        <div className='row'>
          <Navbar className='pt-5'></Navbar>
          <div className='col-12 mx-auto'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"
              data-bs-pause="false">

              <div class="carousel-inner">
                <div class="carousel-item active c-item " data-bs-interval="2500">

                  <img src={web} class="w-100 sizing image-align displayer" alt="..." />
                  <img src={web3} className='displayer1'></img>
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>

                  </div>
                </div>
                <div class="carousel-item active c-item " data-bs-interval="2500">

                  <img src={web1} class="w-100 sizing image-align" alt="..." />
                  
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>

                  </div>
                </div>
                <div class="carousel-item active c-item " data-bs-interval="2500">

                  <img src={web2} class="w-100 sizing image-align displayer" alt="..." />
                  <img src={web4} className='displayer1'></img>
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>

                  </div>
                </div>
                <div class="carousel-item active c-item " data-bs-interval="2500">

                  <img src={web6} class="w-100 sizing image-align displayer" alt="..." />
                  <img src={web9} className='displayer1'></img>
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>

                  </div>
                </div>
                <div class="carousel-item c-item" data-bs-interval="2500">

                <img src={web7} class="w-100 sizing image-align displayer" alt="..." />
                  <img src={web10} className='displayer1'></img>

                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item c-item" data-bs-interval="2500">

                  <img src={web8} class="d-block w-100 sizing image-align displayer" alt="..." />
                  <img src={web5} className='displayer1'></img>
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                      <h1 className='hfixer fade-in'>Unlock Your Potential</h1>
                      <p className='pfixer fade-in'>Welcome to Sare Khelo Bharat, your gateway to sporting greatness. Explore top-tier facilities, expert coaching, and a vibrant community. Join us and embark on your journey to success. Unleash your potential and become a champion today!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
