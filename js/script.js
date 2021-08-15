
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


