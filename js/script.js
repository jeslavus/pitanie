
var btn = document.querySelectorAll(".box_footer");
    txt = document.querySelectorAll(".invis");
    arrow = document.querySelectorAll(".arrow");
    dot = document.querySelectorAll(".dots");
  
btn.forEach((element, index) => {
    btn[index].onclick = () => {
        txt[index].classList.toggle("show");
        arrow[index].classList.toggle("reverse");
    };
});

dot.forEach((e, i) => {
    dot[i].onclick = () => {
        dot[i].style.backgroundColor = 'orange';
    };
});


for (var i=0; i<dot.length; i++) {
    dot[i].onchange = function() {
      if (dot[0].style.backgroundColor = 'orange') {
        dot[1].style.backgroundColor = 'white';
        dot[2].style.backgroundColor = 'white';
      } else if (dot[1].style.backgroundColor = 'orange') {
        dot[0].style.backgroundColor = 'white';
        dot[2].style.backgroundColor = 'white';
      } else if (dot[2].style.backgroundColor = 'orange') {
        dot[0].style.backgroundColor = 'white';
        dot[1].style.backgroundColor = 'white';
      }
    };
  }
