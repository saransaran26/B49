// QUESTION 1
//Get all the countries from Asia continent /region using Filter function


var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
    var arr = JSON.parse(req.responseText)
    var res = arr.filter((val) => val.region=="Asia")
    var ans = res.map((value) => value.name.common)
    console.log(ans)  
}

// QUESTION 2
//Get all the countries with a population of less than 2 lakhs using Filter function

var req = new XMLHttpRequest()
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
    var arr = JSON.parse(req.responseText)
    var res = arr.filter((val) => val.population<100000)
    var ans = res.map((value) => value.name.common)
    console.log(ans)
}

//QUESTION 3
// Print the following details name, capital, flag using forEach function

var req = new XMLHttpRequest()
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
     var arr = JSON.parse(req.responseText)
     arr.forEach((value) => {
        console.log(value.flag)
        console.log(value.capital)
        console.log(value.name.common)
    })
}

//QUESTION 4
// Print the total population of countries using reduce function

var req = new XMLHttpRequest()
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
      var arr = JSON.parse(req.responseText)
      var res = arr.reduce((acc,ele) => acc+ele.population,0)
      console.log(res)
}

//QUESTION 5
// Print the country which uses US Dollars as currency.

var req = new XMLHttpRequest()
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
    var arr = JSON.parse(req.responseText)
     for(let i=0;i<arr.length;i++){
         console.log(arr[i].currencies.code=='USD')
     }
}

