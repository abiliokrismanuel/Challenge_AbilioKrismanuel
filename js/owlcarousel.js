$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [$('.prev'), $('.next')],
    items: 1,
    stagePadding: 400,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })