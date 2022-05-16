// Mercury Variables

const mercury_info = document.getElementById('mercury_info');
const mercury_overview = document.getElementById('mercury_overview');
const mercury_structure = document.getElementById('mercury_structure');
const mercury_image = document.getElementById('mercury_image');
const mercury_surface = document.getElementById('mercury_surface');
const mercury_geology = document.getElementById('surface');
const mercury_title = document.getElementById('mercury_title');

const mercury_rotation = document.getElementById('mercury_rotation');
const mercury_revolution = document.getElementById('mercury_revolution');
const mercury_radius = document.getElementById('mercury_radius');
const mercury_temp = document.getElementById('mercury_temp');


// Mercury Object Data

const mercury_data =  {
    "name": "Mercury",
    "overview": {
      "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    "structure": {
      "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    "geology": {
      "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
    },
    "rotation": "58.6 Days",
    "revolution": "87.97 Days",
    "radius": "2,439.7 KM",
    "temperature": "430°c",
    "images": {
      "planet": "./assets/planet-mercury.svg",
      "internal": "./assets/planet-mercury-internal.svg",
      "geology": "./assets/geology-mercury.png"
    }
  };

mercury_rotation.innerHTML = mercury_data.rotation;
mercury_revolution.innerHTML = mercury_data.revolution;
mercury_radius.innerHTML = mercury_data.radius;
mercury_temp.innerHTML = mercury_data.temperature;

// Event Listeners

mercury_overview.addEventListener('click', function(){

      function remove(){
        mercury_image.classList.remove('fade-in');
        mercury_info.classList.remove('text-fade');
        mercury_title.classList.remove('text-fade');
      }
      
      mercury_info.innerHTML = mercury_data.overview.content;
      mercury_image.classList.remove(...mercury_image.classList);
      mercury_image.classList.add('planet__image');
      setTimeout(remove, 1400);
      mercury_image.classList.add('fade-in');
      mercury_info.classList.add('text-fade');
      mercury_title.classList.add('text-fade');
      mercury_geology.classList.add('hidden');
    
});
 
mercury_structure.addEventListener('click', function(){

    function remove(){
      mercury_image.classList.remove('fade-in');
      mercury_info.classList.remove('fade-in');
      mercury_info.classList.remove('text-fade');
      mercury_title.classList.remove('text-fade')
    }
    
    mercury_info.innerHTML = mercury_data.structure.content;
    mercury_image.classList.add('planet__structure');
    mercury_image.classList.add('fade-in');
    setTimeout(remove, 1400);
    mercury_info.classList.add('text-fade');
    mercury_geology.classList.add('hidden');
});

mercury_surface.addEventListener('click', function(){

  function remove(){
    mercury_image.classList.remove('fade-in');
    mercury_info.classList.remove('text-fade');
    mercury_title.classList.remove('text-fade')
    mercury_geology.classList.remove('fade-in');
  }

    mercury_info.innerHTML = mercury_data.geology.content;
    mercury_image.classList.add('planet__image');
    mercury_image.classList.add('fade-in');
    mercury_geology.classList.add('fade-in');
    setTimeout(remove, 1400);
    mercury_info.classList.add('text-fade');
    mercury_geology.classList.remove('hidden');
});