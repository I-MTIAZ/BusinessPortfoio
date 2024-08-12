
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sticky-header');
    const scrollThreshold = 2000; // Change this value to adjust when to remove stickiness

    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('non-sticky-header');
      } else {
        header.classList.remove('non-sticky-header');
      }
    });
  });




const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('small')
            console.log("oha")
        }
        else{
            entry.target.classList.remove('small')
        }
    })
})

const observeboom = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('Big')
            console.log("oha")
        }
        else{
            entry.target.classList.remove('Big')
        }
    })
})



const hideElements  = document.querySelectorAll('.hide');

hideElements.forEach((el) => observer.observe(el))

const galleryElements = document.querySelectorAll('.logos');
galleryElements.forEach((el) => observe.observe(el))


let layer = document.querySelector('.layer');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    layer.style.left =  value +'px'
})





