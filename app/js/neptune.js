// Neptune Variables

const neptune_info = document.getElementById('neptune_info');
const neptune_overview = document.getElementById('neptune_overview');
const neptune_structure = document.getElementById('neptune_structure');
const neptune_image = document.getElementById('neptune_image');
const neptune_surface = document.getElementById('neptune_surface');
const neptune_geology = document.getElementById('surface');
const neptune_title = document.getElementById('neptune_title');

const neptune_rotation = document.getElementById('neptune_rotation');
const neptune_revolution = document.getElementById('neptune_revolution');
const neptune_radius = document.getElementById('neptune_radius');
const neptune_temp = document.getElementById('neptune_temp');


// Neptune Object Data

const neptune_data =  {
    "name": "Neptune",
    "overview": {
      "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      "source": "https://en.wikipedia.org/wiki/Neptune"
    },
    "structure": {
      "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    "geology": {
      "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
    },
    "rotation": "16.08 Hours",
    "revolution": "164.79 Years",
    "radius": "24,622 KM",
    "temperature": "-201°c",
    "images": {
      "planet": "./assets/planet-neptune.svg",
      "internal": "./assets/planet-neptune-internal.svg",
      "geology": "./assets/geology-neptune.png"
    }
  };


neptune_rotation.innerHTML = neptune_data.rotation;
neptune_revolution.innerHTML = neptune_data.revolution;
neptune_radius.innerHTML = neptune_data.radius;
neptune_temp.innerHTML = neptune_data.temperature;

// Event Listeners


// Overview
neptune_overview.addEventListener('click', function(){

      function remove(){
        neptune_image.classList.remove('fade-in');
        neptune_info.classList.remove('text-fade');
        neptune_title.classList.remove('text-fade');
      }
      neptune_info.innerHTML = neptune_data.overview.content;
      neptune_image.classList.remove(...neptune_image.classList);
      neptune_image.classList.add('neptune__image');
      setTimeout(remove, 1400);
      neptune_image.classList.add('fade-in');
      neptune_info.classList.add('text-fade');
      neptune_title.classList.add('text-fade');
      neptune_geology.classList.add('hidden');
    
});
 
neptune_structure.addEventListener('click', function(){

    function remove(){
      neptune_image.classList.remove('fade-in');
      neptune_info.classList.remove('fade-in');
      neptune_info.classList.remove('text-fade');
      neptune_title.classList.remove('text-fade')
    }
    
    neptune_info.innerHTML = neptune_data.structure.content;
    neptune_image.classList.add('neptune__structure');
    neptune_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    neptune_info.classList.add('text-fade');
    neptune_geology.classList.add('hidden');
});

neptune_surface.addEventListener('click', function(){

  function remove(){
    neptune_image.classList.remove('fade-in');
    neptune_info.classList.remove('text-fade');
    neptune_title.classList.remove('text-fade')
    neptune_geology.classList.remove('fade-in');
  }

    neptune_info.innerHTML = neptune_data.geology.content;
    neptune_image.classList.add('neptune__image');
    neptune_image.classList.add('fade-in');
    neptune_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    neptune_info.classList.add('text-fade');
    neptune_geology.classList.remove('hidden');
});