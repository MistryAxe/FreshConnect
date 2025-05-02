document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.textContent = "Your message has been sent successfully!";
  });
  function initLiveMap() {
    const mapContainer = document.getElementById("live-map");
  
    if (!navigator.geolocation) {
      mapContainer.innerHTML = "<p>Geolocation is not supported by your browser.</p>";
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        const map = new google.maps.Map(mapContainer, {
          center: { lat: lat, lng: lon },
          zoom: 15,
        });
  
        new google.maps.Marker({
          position: { lat: lat, lng: lon },
          map: map,
          title: "You are here!",
        });
      },
      (error) => {
        mapContainer.innerHTML = "<p>Unable to retrieve your location. Please allow location access.</p>";
      }
    );
  }
  
