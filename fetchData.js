const url = "https://api.genderize.io/";

fetch(url)
  .then(resp => resp.json()) // Transform the data into json

  .then(function(data) {
    let gender = data.gender;
    return gender;
  });
console.log(resp);
