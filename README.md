# Weather-Journal App Project

##project description
buiding an asynchronous web app that uses Web API and user data to dynamically update the UI.

---

##criteria
1)retrive an API input from external server as current_temperture
2)recive two inputs from user as ZipCode and myFeelings
3)app should add inputs into an endpoint object called projectData
4)app should get data back from endpoint to create dynamic UI

---

##how is it done
###1st criterium

1. create a variable for api url === the_Complete_URL, and create an event listener for the button
2. within the listener we use 'fetch(the_Complete_URL)' to request data from the api
3. we set a variable for the temperture === current_Temperture.main.temp;

---

###2st criterium

1.  create two variables ,one for contryZipCode =>will be part of the_Complete_URL

2.  another for my_feelings => we add .value to get the content of the box

---

###3st criterium
1.use the post request i_GiveServer "chained to the fetch call using then()" to inter data intered to the endpoint

2. in the server side assign the value of our endpoint i.e. projectData === req.body => this adds data to endpoint

---

###4st criterium
1)use the GET request serverGiveMe "chained to the post request using then()" to get data srom from endpoint

2)update UI using .innerHTML

---
