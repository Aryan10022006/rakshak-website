import React from 'react';

function Hero() {
    return ( 
        
<div id="carouselExampleCaptions" class="carousel slide mb-5">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="images/team_24-25.jpg" class="d-block w-100" alt="competition"  width="50%" height="600vh"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Rakshak 24-25: Masters of the Skies</h5>
        <p>Engineering the future, one UAV at a time. Meet the team pushing the boundaries of autonomous aviation at IIT Bombay!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="images/Pg8.jpg" class="d-block w-100" alt="competition"  width="50%" height="600vh" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="images/andimandisandi.jpg" class="d-block w-100" alt="competition"  width="50%" height="600vh"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div> 

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     );
}

export default Hero;