/* Global Variables */

let myDateInstance = new Date();
let today = `${myDateInstance.getDate()}/${
  //create variable for todays date
  1 + myDateInstance.getMonth()
}/${myDateInstance.getFullYear()}`;
/*
 *
 *
 *
 */
let generateButton = document.getElementById("generate"); //create a variable for the generate button

/*
 *
 *
 *
 */

async function doThis() {
  //creating a listener function
  try {
    const my_apiKey = "4cdd93ab971acda3fcd2ef12b4be25d1&units=imperial";
    const cntryZipCode = document.getElementById("zip").value;
    const the_Complete_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${cntryZipCode}&appid=${my_apiKey}`;
    let my_feelings = document.getElementById("feelings").value;
    /*
     *
     */
    await fetch(the_Complete_URL) // requesting data from api
      .then(async (apidata) => {
        let current_Temperture = await apidata.json(); //letverting data into json format
        current_Temperture = current_Temperture.main.temp; //setting a variable for the temp

        return current_Temperture;
      })
      .then((temp) => {
        i_GiveServer("/postDataToEndPoint", {
          // inter data into post request
          date: today,
          temp: temp,
          feeling: my_feelings,
        });

        //console.log(temp);
      })
      .then(
        (serverGiveMe = async () => {
          let myResults = await fetch("/getMyWeatherInfo"); // making a GET request to display data from endpoint into UI

          let parsedResults = await myResults.json(); //letverting  data coming from end point to json, then display it
          //console.log(parsedResults);
          document.getElementById(
            "date"
          ).innerHTML = `today is ${parsedResults.date}`;
          document.getElementById(
            "temp"
          ).innerHTML = `temperture now is ${parsedResults.temp} C°`;
          document.getElementById(
            "content"
          ).innerHTML = `I'm feeling ${parsedResults.feeling}`;
        })
      );
  } catch (error) {
    //error message for invalid zipcode values
    document.getElementById("date").innerHTML = "";
    document.getElementById("temp").innerHTML = "";
    document.getElementById("content").innerHTML =
      "please enter a valid zip code number";
  }
}
/*
 *
 *
 *
 */
generateButton.addEventListener("click", doThis); //create an event listener for the generate button

let i_GiveServer = async (myurl = "", mydata = {}) => {
  // create a post request to inter data into the endpoint
  let response = await fetch(myurl, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mydata),
  });

  try {
    let newData = await response.json();
    console.log(newData);
    /*
     *
     */
  } catch (error) {
    console.log("error in the post request", error);
  }
};
/*
 *
 *
 *
 */
