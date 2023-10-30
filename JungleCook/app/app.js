import { changePage } from "../data/model.js";

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    $("#bread-crumb").html(``);
    console.log("it worked");
    changePage(hashTag, pageID);
    
}

function initListeners(){

}

function initSite(){
     $(window).on("hashchange", route)
     route();
}

$(document).ready(function () {
    
    initSite()
    
});
