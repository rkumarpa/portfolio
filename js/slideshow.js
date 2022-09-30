
    var slideIndex = 1;
    showDivs(slideIndex);
    var post;
    
    function plusDivs(n) {
      var i = n;
      showDivs(slideIndex += n,i);
    }
    
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }
    
    function showDivs(n, v) {
      let x = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("status");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" statusGreen", "");
      }
      x[slideIndex-1].style.display = "block"; 
      if(v > 0 ) {
        x[slideIndex-1].classList.remove("animat_Left");
        x[slideIndex-1].classList.remove("animat_right");
        x[slideIndex-1].className += " animat_right";
      } else {
        x[slideIndex-1].classList.remove("animat_Left");
        x[slideIndex-1].classList.remove("animat_right");
        x[slideIndex-1].className += " animat_Left";
      }
      dots[slideIndex-1].className += " statusGreen";
      post = slideIndex;
    }

    var slideIndex1 = 1;
    showDivs1(slideIndex1);
    
    function plusDivs1(n) {
      showDivs1(slideIndex1 += n);
    }
    
    function currentDiv1(n) {
      showDivs1(slideIndex1 = n);
    }
    
    function showDivs1(n) {
      let j;
      let y = document.getElementsByClassName("mySlides1");
      let dots = document.getElementsByClassName("status1");
      if (n > y.length) {slideIndex1 = 1}    
      if (n < 1) {slideIndex1 = y.length}
      for (j = 0; j < y.length; j++) {
         y[j].style.display = "none";  
      }
      for (j = 0; j < dots.length; j++) {
         dots[j].className = dots[j].className.replace(" statusGreen", "");
      }
      y[slideIndex1-1].style.display = "flex";  
      dots[slideIndex1-1].className += " statusGreen";
    };

    var slideIndexM = 1;
    showDivsM(slideIndexM);
    
    function plusDivsM(n) {
      showDivsM(slideIndexM += n);
    }
    
    function currentDivM(n) {
      showDivsM(slideIndexM = n);
    }
    
    function showDivsM(n) {
      let j;
      let y = document.getElementsByClassName("mySlidesM");
      let dots = document.getElementsByClassName("statusM");
      if (n > y.length) {slideIndexM = 1}    
      if (n < 1) {slideIndexM = y.length}
      for (j = 0; j < y.length; j++) {
         y[j].style.display = "none";  
      }
      for (j = 0; j < dots.length; j++) {
         dots[j].className = dots[j].className.replace(" statusGreen", "");
      }
      y[slideIndexM-1].style.display = "flex";  
      dots[slideIndexM-1].className += " statusGreen";
    }
