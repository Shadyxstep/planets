// Mars Variables

const saturn_info = document.getElementById('saturn_info');
const saturn_overview = document.getElementById('saturn_overview');
const saturn_structure = document.getElementById('saturn_structure');
const saturn_image = document.getElementById('saturn_image');
const saturn_surface = document.getElementById('saturn_surface');
const saturn_geology = document.getElementById('surface');
const saturn_title = document.getElementById('saturn_title');

const saturn_rotation = document.getElementById('saturn_rotation');
const saturn_revolution = document.getElementById('saturn_revolution');
const saturn_radius = document.getElementById('saturn_radius');
const saturn_temp = document.getElementById('saturn_temp');


// Mars Object Data

const saturn_data =  {
    "name": "Saturn",
    "overview": {
      "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      "source": "https://en.wikipedia.org/wiki/Saturn"
    },
    "structure": {
      "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    "geology": {
      "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
    },
    "rotation": "10.8 Hours",
    "revolution": "29.46 Years",
    "radius": "58,232 KM",
    "temperature": "-138°c",
    "images": {
      "planet": "./assets/planet-saturn.svg",
      "internal": "./assets/planet-saturn-internal.svg",
      "geology": "./assets/geology-saturn.png"
    }
  };


saturn_rotation.innerHTML = saturn_data.rotation;
saturn_revolution.innerHTML = saturn_data.revolution;
saturn_radius.innerHTML = saturn_data.radius;
saturn_temp.innerHTML = saturn_data.temperature;

// Event Listeners


// Overview
saturn_overview.addEventListener('click', function(){

      function remove(){
        saturn_image.classList.remove('fade-in');
        saturn_info.classList.remove('text-fade');
        saturn_title.classList.remove('text-fade');
      }
      saturn_info.innerHTML = saturn_data.overview.content;
      saturn_image.classList.remove(...saturn_image.classList);
      saturn_image.classList.add('saturn__image');
      setTimeout(remove, 1400);
      saturn_image.classList.add('fade-in');
      saturn_info.classList.add('text-fade');
      saturn_title.classList.add('text-fade');
      saturn_geology.classList.add('hidden');
    
});
 
saturn_structure.addEventListener('click', function(){

    function remove(){
      saturn_image.classList.remove('fade-in');
      saturn_info.classList.remove('fade-in');
      saturn_info.classList.remove('text-fade');
      saturn_title.classList.remove('text-fade')
    }
    
    saturn_info.innerHTML = saturn_data.structure.content;
    saturn_image.classList.add('saturn__structure');
    saturn_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    saturn_info.classList.add('text-fade');
    saturn_geology.classList.add('hidden');
});

saturn_surface.addEventListener('click', function(){

  function remove(){
    saturn_image.classList.remove('fade-in');
    saturn_info.classList.remove('text-fade');
    saturn_title.classList.remove('text-fade')
    saturn_geology.classList.remove('fade-in');
  }

    saturn_info.innerHTML = saturn_data.geology.content;
    saturn_image.classList.add('saturn__image');
    saturn_image.classList.add('fade-in');
    saturn_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    saturn_info.classList.add('text-fade');
    saturn_geology.classList.remove('hidden');
});