/** nav bar **/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animate link
    navLinks.forEach((link, index) => {
        link.style.amination = 'navLinkFade 0.5 ease forwards ${index / 3 + 0.3}s';
        
    });
}

navSlide();

    /** owl carousel **/
    $(document).ready(function() {
    
        $("#owl-demo").owlCarousel({
            autoPlay: 1750, //Set AutoPlay to 3 seconds
            navigation : false,
            items: 4,
            itemsDesktop : [1280,3],
            itemsMobile : [728,1]
        });
      
      });

  /** reveal **/
  window.addEventListener('scroll',reveal);
        
  function reveal(){
      var reveals = document.querySelectorAll('.reveal')

      for(var i = 0; i < reveals.length; i ++){

          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add('active');
          }
          else{
              revels[i].classList.remove('active')
          }
      }
  }

  /** page up button **/
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }


  
    /** slide **/
    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
    }
    

