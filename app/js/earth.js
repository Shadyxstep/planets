// Earth Variables

const earth_info = document.getElementById('earth_info');
const earth_overview = document.getElementById('earth_overview');
const earth_structure = document.getElementById('earth_structure');
const earth_image = document.getElementById('earth_image');
const earth_surface = document.getElementById('earth_surface');
const earth_geology = document.getElementById('surface');
const earth_title = document.getElementById('earth_title');

const earth_rotation = document.getElementById('earth_rotation');
const earth_revolution = document.getElementById('earth_revolution');
const earth_radius = document.getElementById('earth_radius');
const earth_temp = document.getElementById('earth_temp');



// Earth Object Data

const earth_data =  {
    "name": "Earth",
    "overview": {
      "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      "source": "https://en.wikipedia.org/wiki/Earth"
    },
    "structure": {
      "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    "geology": {
      "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      "source": "https://en.wikipedia.org/wiki/Earth#Surface"
    },
    "rotation": "0.99 Days",
    "revolution": "365.26 Days",
    "radius": "6,371 KM",
    "temperature": "16°c",
    "images": {
      "planet": "./assets/planet-earth.svg",
      "internal": "./assets/planet-earth-internal.svg",
      "geology": "./assets/geology-earth.png"
    }
  };


earth_rotation.innerHTML = earth_data.rotation;
earth_revolution.innerHTML = earth_data.revolution;
earth_radius.innerHTML = earth_data.radius;
earth_temp.innerHTML = earth_data.temperature;

// Event Listeners


// Overview
earth_overview.addEventListener('click', function(){

      function remove(){
        earth_image.classList.remove('fade-in');
        earth_info.classList.remove('text-fade');
        earth_title.classList.remove('text-fade');
      }
      earth_info.innerHTML = earth_data.overview.content;
      earth_image.classList.remove(...earth_image.classList);
      earth_image.classList.add('earth__image');
      setTimeout(remove, 1400);
      earth_image.classList.add('fade-in');
      earth_info.classList.add('text-fade');
      earth_title.classList.add('text-fade');
      earth_geology.classList.add('hidden');
    
});
 
earth_structure.addEventListener('click', function(){

    function remove(){
      earth_image.classList.remove('fade-in');
      earth_info.classList.remove('fade-in');
      earth_info.classList.remove('text-fade');
      earth_title.classList.remove('text-fade')
    }
    
    earth_info.innerHTML = earth_data.structure.content;
    earth_image.classList.add('earth__structure');
    earth_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    earth_info.classList.add('text-fade');
    earth_geology.classList.add('hidden');
});

earth_surface.addEventListener('click', function(){

  function remove(){
    earth_image.classList.remove('fade-in');
    earth_info.classList.remove('text-fade');
    earth_title.classList.remove('text-fade')
    earth_geology.classList.remove('fade-in');
  }

    earth_info.innerHTML = earth_data.geology.content;
    earth_image.classList.add('earth__image');
    earth_image.classList.add('fade-in');
    earth_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    earth_info.classList.add('text-fade');
    earth_geology.classList.remove('hidden');
});