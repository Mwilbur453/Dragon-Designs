/* 
This is the JavaScript file that will run my slideshow in my webportfolio
Name: Matthew Wilbur
Date: 10/04/2020
*/

var slideHeaders = ["A Soldier's Scrapbook", "Suduku", "Lyman Theatre Schedule",
"Book Reviews", "Cauli-Wood Art Gallery"];
var slideInfos = ["I created this page for a website that talks about the\
 Invasion of Normandy. Along with the information about\
 the invasion, the site also includes an interactive map.\
 When the user hovers over an icon on the map, the site will\
 display information about that particular battle site.",
"This site was created to allow the user to find and print out different\
 suduku puzzles.",
"This page was created for the Lyman Theatre. It contains some basic information\
 about the theatre itself, as well as a calender of events for the current month.",
"This page was created for an online book store. I created the review page\
 for their books. On the page, you can find the name and description\
 of a book, as well as a five star rating system and a comment section.",
"I created this page for the Cauli-Wood Art Gallery. On their home page,\
  you can find a brief overview of what this art gallery is, as well as\
  a featured piece of art."];
var slideLinks = ["case3\\ss_dday.html", "case2\\jpf_sudoku.html", "case3\\lht_feb.html",
"case1\\bw_review.html", "case3\\cw_home.html"];

window.onload = init();


function init() {
    var slide = 0;
    setSlide(slide);
    document.getElementById("rightArrow").addEventListener("click", function(){
        if (slide != 4) {
            slide += 1;
            setSlide(slide);
        }else {
            slide = 0;
            setSlide(slide);
        }
        
    });
    document.getElementById("leftArrow").addEventListener("click", function(){
        if (slide != 0){
            slide -= 1;
            setSlide(slide);
        } else {
            slide = 4;
            setSlide(slide);
        }
    });
}

function setSlide(slide) {
    document.getElementById("snapshot").innerHTML = "<a href='" + slideLinks[slide] + "'>\
    " + "<img src='example" + slide.toString() + ".PNG' /></a>";
    document.getElementById("slideInfo").innerHTML = "<h5 class='centered'>" + slideHeaders[slide] + "</h5>\
    <p>" + slideInfos[slide] + "</p>";
}

