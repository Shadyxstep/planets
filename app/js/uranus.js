// Uranus Variables

const uranus_info = document.getElementById('uranus_info');
const uranus_overview = document.getElementById('uranus_overview');
const uranus_structure = document.getElementById('uranus_structure');
const uranus_image = document.getElementById('uranus_image');
const uranus_surface = document.getElementById('uranus_surface');
const uranus_geology = document.getElementById('surface');
const uranus_title = document.getElementById('uranus_title');

const uranus_rotation = document.getElementById('uranus_rotation');
const uranus_revolution = document.getElementById('uranus_revolution');
const uranus_radius = document.getElementById('uranus_radius');
const uranus_temp = document.getElementById('uranus_temp');


// Uranus Object Data

const uranus_data =  {
    "name": "Uranus",
    "overview": {
      "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      "source": "https://en.wikipedia.org/wiki/Uranus"
    },
    "structure": {
      "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    "geology": {
      "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
    },
    "rotation": "17.2 Hours",
    "revolution": "84 Years",
    "radius": "25,362 KM",
    "temperature": "-195°c",
    "images": {
      "planet": "./assets/planet-uranus.svg",
      "internal": "./assets/planet-uranus-internal.svg",
      "geology": "./assets/geology-uranus.png"
    }
  };


uranus_rotation.innerHTML = uranus_data.rotation;
uranus_revolution.innerHTML = uranus_data.revolution;
uranus_radius.innerHTML = uranus_data.radius;
uranus_temp.innerHTML = uranus_data.temperature;

// Event Listeners


// Overview
uranus_overview.addEventListener('click', function(){

      function remove(){
        uranus_image.classList.remove('fade-in');
        uranus_info.classList.remove('text-fade');
        uranus_title.classList.remove('text-fade');
      }
      uranus_info.innerHTML = uranus_data.overview.content;
      uranus_image.classList.remove(...uranus_image.classList);
      uranus_image.classList.add('uranus__image');
      setTimeout(remove, 1400);
      uranus_image.classList.add('fade-in');
      uranus_info.classList.add('text-fade');
      uranus_title.classList.add('text-fade');
      uranus_geology.classList.add('hidden');
    
});
 
uranus_structure.addEventListener('click', function(){

    function remove(){
      uranus_image.classList.remove('fade-in');
      uranus_info.classList.remove('fade-in');
      uranus_info.classList.remove('text-fade');
      uranus_title.classList.remove('text-fade')
    }
    
    uranus_info.innerHTML = uranus_data.structure.content;
    uranus_image.classList.add('uranus__structure');
    uranus_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    uranus_info.classList.add('text-fade');
    uranus_geology.classList.add('hidden');
});

uranus_surface.addEventListener('click', function(){

  function remove(){
    uranus_image.classList.remove('fade-in');
    uranus_info.classList.remove('text-fade');
    uranus_title.classList.remove('text-fade')
    uranus_geology.classList.remove('fade-in');
  }

    uranus_info.innerHTML = uranus_data.geology.content;
    uranus_image.classList.add('uranus__image');
    uranus_image.classList.add('fade-in');
    uranus_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    uranus_info.classList.add('text-fade');
    uranus_geology.classList.remove('hidden');
});