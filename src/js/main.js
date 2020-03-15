$(document).ready(function () {
  const modal = $('.modal')
  const modalBtn = $('[data-toggle=modal]')
  const closeBtn = $('.modal__close')

  const switchModal = () => {
    modal.toggleClass('modal--visible')
  }

  function isModal () {
    return modal.hasClass('modal--visible')
  }

  modalBtn.on('click', switchModal)

  closeBtn.on('click', switchModal)

  $(document).keydown((e) => {
    var key = e.key || e.keyCode

    if ((key === 'Escape' || key === 'Esc' || key === 27) && isModal()) {
      switchModal()
    }
  })

  modal.click((e) => {
    if ($(e.target).hasClass('modal')) { switchModal() }
  })

  // initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }

  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)
})
