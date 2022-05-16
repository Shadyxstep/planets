// Mars Variables

const mars_info = document.getElementById('mars_info');
const mars_overview = document.getElementById('mars_overview');
const mars_structure = document.getElementById('mars_structure');
const mars_image = document.getElementById('mars_image');
const mars_surface = document.getElementById('mars_surface');
const mars_geology = document.getElementById('surface');
const mars_title = document.getElementById('mars_title');

const mars_rotation = document.getElementById('mars_rotation');
const mars_revolution = document.getElementById('mars_revolution');
const mars_radius = document.getElementById('mars_radius');
const mars_temp = document.getElementById('mars_temp');


// Mars Object Data

const mars_data =  {
    "name": "Mars",
    "overview": {
      "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
      "source": "https://en.wikipedia.org/wiki/Mars"
    },
    "structure": {
      "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    "geology": {
      "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
    },
    "rotation": "1.03 Days",
    "revolution": "1.88 Years",
    "radius": "3,389.5 KM",
    "temperature": "-28°c",
    "images": {
      "planet": "./assets/planet-mars.svg",
      "internal": "./assets/planet-mars-internal.svg",
      "geology": "./assets/geology-mars.png"
    }
  };


mars_rotation.innerHTML = mars_data.rotation;
mars_revolution.innerHTML = mars_data.revolution;
mars_radius.innerHTML = mars_data.radius;
mars_temp.innerHTML = mars_data.temperature;

// Event Listeners


// Overview
mars_overview.addEventListener('click', function(){

      function remove(){
        mars_image.classList.remove('fade-in');
        mars_info.classList.remove('text-fade');
        mars_title.classList.remove('text-fade');
      }
      mars_info.innerHTML = mars_data.overview.content;
      mars_image.classList.remove(...mars_image.classList);
      mars_image.classList.add('mars__image');
      setTimeout(remove, 1400);
      mars_image.classList.add('fade-in');
      mars_info.classList.add('text-fade');
      mars_title.classList.add('text-fade');
      mars_geology.classList.add('hidden');
    
});
 
mars_structure.addEventListener('click', function(){

    function remove(){
      mars_image.classList.remove('fade-in');
      mars_info.classList.remove('fade-in');
      mars_info.classList.remove('text-fade');
      mars_title.classList.remove('text-fade')
    }
    
    mars_info.innerHTML = mars_data.structure.content;
    mars_image.classList.add('mars__structure');
    mars_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    mars_info.classList.add('text-fade');
    mars_geology.classList.add('hidden');
});

mars_surface.addEventListener('click', function(){

  function remove(){
    mars_image.classList.remove('fade-in');
    mars_info.classList.remove('text-fade');
    mars_title.classList.remove('text-fade')
    mars_geology.classList.remove('fade-in');
  }

    mars_info.innerHTML = mars_data.geology.content;
    mars_image.classList.add('mars__image');
    mars_image.classList.add('fade-in');
    mars_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    mars_info.classList.add('text-fade');
    mars_geology.classList.remove('hidden');
});