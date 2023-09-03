fetch('../data.json')
    .then(response => response.json())
    .then(data => getData(data));

getData = (data)=>{
    data = JSON.parse(data);
    for(key in data){
        document.querySelector('.'+data[key]['category'].toLowerCase()+' img').setAttribute('src',data[key]['icon']); // insert icons from json file
        document.querySelector('.'+data[key]['category'].toLowerCase()+' img').setAttribute('alt','icon-'+data[key]['category'].toLowerCase()); // insert icons ALT text using json file
        document.querySelector('.'+data[key]['category'].toLowerCase()+' h4').innerHTML = data[key]['category']; // insert category from json file
        document.querySelector('.'+data[key]['category'].toLowerCase()+' span').innerHTML = data[key]['score']; // insert score from json file
    }
}
