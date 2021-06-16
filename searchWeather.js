
function cityTemp() {
  let temperatureDiscription = document.querySelector(
    ".temperature-discription"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSpan = document.querySelector(".temperature span");
  let cityName = document.getElementById("search").value;
  let changeBG = document.body;
  let input = document.getElementById("search");
  console.log(cityName);

  let urlx = `https://source.unsplash.com/800x800/?${cityName},weather`;
  console.log(urlx);
  changeBG.style.backgroundImage =`url(${urlx})`;

  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4d9ffb85fec653fe8e30f3a4ed0c5b20`;
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const { temp } = data.main;
      const { main } = data.weather[0];
      const { icon } = data.weather[0];
      let fahrenhiet = temp * (9 / 5) + 32;
      //icon image url
      const iconurl = `http://openweathermap.org/img/w/${icon}.png`;

      //Set DOM Elements from the API
      temperatureDegree.textContent = temp;
      temperatureDiscription.textContent = main;
      locationTimezone.textContent = data.name;
      //showing icon image
      document.getElementById("wicon").src = iconurl;

      //change temperature C to F
      temperatureSection.addEventListener("click", () => {
        if (temperatureSpan.textContent === "C") {
          temperatureSpan.textContent = "F";
          temperatureDegree.textContent = fahrenhiet.toFixed(2);
        } else {
          temperatureSpan.textContent = "C";
          temperatureDegree.textContent = temp;
        }
      });
    });
   

    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.key === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit").click();
      }
    });
      
}
