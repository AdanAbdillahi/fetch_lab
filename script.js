console.log("Hi!");


fetch('https://restcountries.com/v2/name/peru')
.then(res => res.json())
.then(data => console.log(data))


