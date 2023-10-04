$(document).ready(function(){
    $.getJSON("../data.json", function(data){
        $.each(data, function(key,value) {
            $('.'+data[key]['category'].toLowerCase()+' img').attr('src',data[key]['icon']); // insert icons from json file
            $('.'+data[key]['category'].toLowerCase()+' img').attr('alt','icon-'+data[key]['category'].toLowerCase()); // insert icons ALT text using json file
            $('.'+data[key]['category'].toLowerCase()+' h4').html(data[key]['category']); // insert category from json file
            $('.'+data[key]['category'].toLowerCase()+' span').html(data[key]['score']); // insert score from json file
        });
    }).fail(function(){
        console.log("Unable to retrieve data");
    });
});
