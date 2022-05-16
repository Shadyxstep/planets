// Mercury Variables

const venus_info = document.getElementById('venus_info');
const venus_overview = document.getElementById('venus_overview');
const venus_structure = document.getElementById('venus_structure');
const venus_image = document.getElementById('venus_image');
const venus_surface = document.getElementById('venus_surface');
const venus_geology = document.getElementById('surface');
const venus_title = document.getElementById('venus_title');

const venus_rotation = document.getElementById('venus_rotation');
const venus_revolution = document.getElementById('venus_revolution');
const venus_radius = document.getElementById('venus_radius');
const venus_temp = document.getElementById('venus_temp');



// Mercury Object Data

const venus_data =  {
    "name": "Venus",
    "overview": {
      "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      "source": "https://en.wikipedia.org/wiki/Venus"
    },
    "structure": {
      "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    "geology": {
      "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
    },
    "rotation": "243 Days",
    "revolution": "224.7 Days",
    "radius": "6,051.8 KM",
    "temperature": "471°c",
    "images": {
      "planet": "./assets/planet-venus.svg",
      "internal": "./assets/planet-venus-internal.svg",
      "geology": "./assets/geology-venus.png"
    }
  };


venus_rotation.innerHTML = venus_data.rotation;
venus_revolution.innerHTML = venus_data.revolution;
venus_radius.innerHTML = venus_data.radius;
venus_temp.innerHTML = venus_data.temperature;

// Event Listeners


// Overview
venus_overview.addEventListener('click', function(){

      function remove(){
        venus_image.classList.remove('fade-in');
        venus_info.classList.remove('text-fade');
        venus_title.classList.remove('text-fade');
      }
      venus_info.innerHTML = venus_data.overview.content;
      venus_image.classList.remove(...venus_image.classList);
      venus_image.classList.add('venus__image');
      setTimeout(remove, 1400);
      venus_image.classList.add('fade-in');
      venus_info.classList.add('text-fade');
      venus_title.classList.add('text-fade');
      venus_geology.classList.add('hidden');
    
});
 
venus_structure.addEventListener('click', function(){

    function remove(){
      venus_image.classList.remove('fade-in');
      venus_info.classList.remove('fade-in');
      venus_info.classList.remove('text-fade');
      venus_title.classList.remove('text-fade')
    }
    
    venus_info.innerHTML = venus_data.structure.content;
    venus_image.classList.add('venus__structure');
    venus_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    venus_info.classList.add('text-fade');
    venus_geology.classList.add('hidden');
});

venus_surface.addEventListener('click', function(){

  function remove(){
    venus_image.classList.remove('fade-in');
    venus_info.classList.remove('text-fade');
    venus_title.classList.remove('text-fade')
    venus_geology.classList.remove('fade-in');
  }

    venus_info.innerHTML = venus_data.geology.content;
    venus_image.classList.add('venus__image');
    venus_image.classList.add('fade-in');
    venus_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    venus_info.classList.add('text-fade');
    venus_geology.classList.remove('hidden');
});