let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elList = document.querySelector(".wrapper-left");

let renderCountrys = function (data) {
  let html = `
  <h2 class="wrapper-head">${data.name}</h2>
  <div class="wrapper-country">Country:${data.sys.country}</div>
  <div class="wrapper-Temper">${data.main.temp}</div>
  <div class="wrapper-speed">Speed:${data.wind.speed}</div>
  `;

  elList.innerHTML = null;
  elList.insertAdjacentHTML("beforeend", html);
};

let main = async function (country) {
  try {
    let Fetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
    );
    let newFetch = await Fetch.json();
    console.log(newFetch);

    renderCountrys(newFetch);
  } catch (error) {
    console.log(error.message);
  }
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let InputValue = elInput.value;
  elInput.innerHTML = null;
  elInput.value = null;

  main(InputValue);
});

main("Tashkent");
