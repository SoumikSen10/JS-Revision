const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    // Convert height from cm to meters by dividing by 100
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    //show results
    results.innerHTML = `<span>${bmi}</span>`;
    const res = document.createElement("h4");
    console.log(bmi);
    if (bmi < 18.6) {
      res.innerText = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      res.innerText = "Normal Range";
    } else {
      res.innerText = "Over Weight";
    }
    results.appendChild(res);
  }
});
