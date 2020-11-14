$(document).ready(function () {
  "use strict";

  if ($('.header-slider').length) {
    $('.header-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
    })
  }

  $('.company-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    infinite: true,
    arrows: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  let openDropDown = false;
  if ($('.dropdown').length) {
    document.querySelector('.dropdown').addEventListener('click', () => {
      if (!openDropDown) {
        document.querySelector('.dropdown i').classList.add('fa-times');
        document.querySelector('.dropdown i').classList.remove('fa-chevron-down');
        document.querySelector('.my-dropdown-menu').style.display = 'block';
        document.querySelector('.my-dropdown-menu').style.height = '300px';
      } else {
        document.querySelector('.dropdown i').classList.add('fa-chevron-down');
        document.querySelector('.dropdown i').classList.remove('fa-times');
        document.querySelector('.my-dropdown-menu').style.display = 'none';
        document.querySelector('.my-dropdown-menu').style.height = '0';
      }
      openDropDown = !openDropDown;
    })
  }

  document.querySelector('.close-dropdown').addEventListener('click', () => {
    document.querySelector('.dropdown i').classList.add('fa-chevron-down');
    document.querySelector('.dropdown i').classList.remove('fa-times');
    document.querySelector('.my-dropdown-menu').style.display = 'none';
    document.querySelector('.my-dropdown-menu').style.height = '0';
    openDropDown = !openDropDown;
  })

})