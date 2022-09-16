fetch('url')                                       // URL --> API url
    .then(res => res.json())                       // get json data then translate to normal data
    .then(data => console.log(data))              // get res/data then use it.