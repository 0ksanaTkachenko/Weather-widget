//  Select

let select = document.querySelector(".select");

select.addEventListener("change", function () {
  let value = this.value;
  let fetchLinc =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    this.value +
    "&units=metric&APPID=5d066958a60d315387d9492393935c19";

  fetch(fetchLinc)
    .then((response) => response.json())
    .then((data) => {
      let sity = document.querySelector(".sity");
      console.log(data);
      sity.textContent = data.name;

      let temp = document.querySelector(".temp-numbers");
      temp.textContent = Math.round(data.main.temp);

      let description = document.querySelector(".description");
      description.textContent = data.weather[0].description;

      let changeIcon =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      let icon = document.querySelector(".icon img");
      icon.setAttribute("src", changeIcon);

      let speed = document.querySelector(".speed-value");
      speed.textContent = data.wind.speed + " " + "km/h";

      let humidity = document.querySelector(".humidity-value");
      humidity.textContent = data.main.humidity + "%";

      let pressure = document.querySelector(".pressure-value");
      pressure.textContent = data.main.pressure;

      let deg = document.querySelector(".deg-value");
      deg.textContent = data.wind.deg;
    });

  let date = new Date();

  let today = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = document.querySelector(".day");
  day.textContent = days[today];

  // fulldate

  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }
  let fullDate =
    addZero(date.getFullYear()) +
    "." +
    addZero(date.getMonth() + 1) +
    "." +
    addZero(date.getDate());

  let dateHtml = document.querySelector(".date");
  dateHtml.textContent = fullDate;

  let modal = document.querySelector(".modal");
  modal.classList.add("modal-closed");

  let back = document.querySelector(".back");
  back.addEventListener("click", function () {
    modal.classList.remove("modal-closed");
  });
});
