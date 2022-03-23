




// Selector


const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}

//close munu 

$('#menu-btn').click(function(){
  $('nav .navigation ul').addClass('active')
});


$('#menu-close').click(function(){
  $('nav .navigation ul').removeClass('active')
});

