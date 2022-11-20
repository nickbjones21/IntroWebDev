var myImages =["https://cdn.pixabay.com/photo/2013/07/12/13/21/baseball-146883_960_720.png", 
               "https://cdn.pixabay.com/photo/2019/01/12/20/15/ache-3929184_960_720.png", 
               "https://cdn.pixabay.com/photo/2014/09/13/03/23/fire-443549_960_720.png", 
               "https://cdn.pixabay.com/photo/2012/04/12/19/36/man-30322_960_720.png", 
               "https://cdn.pixabay.com/photo/2017/01/31/14/13/firewood-2024457_960_720.png", 
               "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"];

var captionImages =["Baseball","Backpain","Fire","Trash","Log","cat"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
