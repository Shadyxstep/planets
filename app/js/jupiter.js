// Mars Variables

const jupiter_info = document.getElementById('jupiter_info');
const jupiter_overview = document.getElementById('jupiter_overview');
const jupiter_structure = document.getElementById('jupiter_structure');
const jupiter_image = document.getElementById('jupiter_image');
const jupiter_surface = document.getElementById('jupiter_surface');
const jupiter_geology = document.getElementById('surface');
const jupiter_title = document.getElementById('jupiter_title');

const jupiter_rotation = document.getElementById('jupiter_rotation');
const jupiter_revolution = document.getElementById('jupiter_revolution');
const jupiter_radius = document.getElementById('jupiter_radius');
const jupiter_temp = document.getElementById('jupiter_temp');


// Mars Object Data

const jupiter_data =  {
    "name": "Jupiter",
    "overview": {
      "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      "source": "https://en.wikipedia.org/wiki/Jupiter"
    },
    "structure": {
      "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    "geology": {
      "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
    },
    "rotation": "9.93 Hours",
    "revolution": "11.86 Years",
    "radius": "69,911 KM",
    "temperature": "-108°c",
    "images": {
      "planet": "./assets/planet-jupiter.svg",
      "internal": "./assets/planet-jupiter-internal.svg",
      "geology": "./assets/geology-jupiter.png"
    }
  };


jupiter_rotation.innerHTML = jupiter_data.rotation;
jupiter_revolution.innerHTML = jupiter_data.revolution;
jupiter_radius.innerHTML = jupiter_data.radius;
jupiter_temp.innerHTML = jupiter_data.temperature;

// Event Listeners


// Overview
jupiter_overview.addEventListener('click', function(){

      function remove(){
        jupiter_image.classList.remove('fade-in');
        jupiter_info.classList.remove('text-fade');
        jupiter_title.classList.remove('text-fade');
      }
      jupiter_info.innerHTML = jupiter_data.overview.content;
      jupiter_image.classList.remove(...jupiter_image.classList);
      jupiter_image.classList.add('jupiter__image');
      setTimeout(remove, 1400);
      jupiter_image.classList.add('fade-in');
      jupiter_info.classList.add('text-fade');
      jupiter_title.classList.add('text-fade');
      jupiter_geology.classList.add('hidden');
    
});
 
jupiter_structure.addEventListener('click', function(){

    function remove(){
      jupiter_image.classList.remove('fade-in');
      jupiter_info.classList.remove('fade-in');
      jupiter_info.classList.remove('text-fade');
      jupiter_title.classList.remove('text-fade')
    }
    
    jupiter_info.innerHTML = jupiter_data.structure.content;
    jupiter_image.classList.add('jupiter__structure');
    jupiter_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    jupiter_info.classList.add('text-fade');
    jupiter_geology.classList.add('hidden');
});

jupiter_surface.addEventListener('click', function(){

  function remove(){
    jupiter_image.classList.remove('fade-in');
    jupiter_info.classList.remove('text-fade');
    jupiter_title.classList.remove('text-fade')
    jupiter_geology.classList.remove('fade-in');
  }

    jupiter_info.innerHTML = jupiter_data.geology.content;
    jupiter_image.classList.add('jupiter__image');
    jupiter_image.classList.add('fade-in');
    jupiter_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    jupiter_info.classList.add('text-fade');
    jupiter_geology.classList.remove('hidden');
});