/* eslint-disable no-undef */
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
  // eslint-disable-next-line no-undef, no-unused-vars
  var progectsSwiper = new Swiper('.projects-swiper', {
  // Optional parameters
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: '.projects-swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev'
    }

  })

  var stepsSwiper1 = new Swiper('.steps-swiper1', {
    loop: true,
    pagination: {
      el: '.steps-swiper1-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                '/' +
                '<span class="' + totalClass + '"></span>'
      }
    }
  })

  var stepsSwiper2 = new Swiper('.steps-swiper2', {
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: '.steps-swiper2-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.steps-swiper2-button-next',
      prevEl: '.steps-swiper2-button-prev'
    }
  })

  var stepsSwiper3 = new Swiper('.steps-swiper3', {
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: '.steps-swiper3-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + ' steps-tab">' + '<h3 class="steps-tab__heading">' + ('00000' + (index + 1)).slice(-2) + '</h3>' + '<span class="steps-tab__value">' + $(stepsSwiper2.slides[index + 1]).find('h3').html() + '</span>' + '</div>'
      }
    }

  })

  stepsSwiper1.controller.control = [stepsSwiper2]
  stepsSwiper2.controller.control = [stepsSwiper3]

  stepsSwiper3.on('slideChange', function () {
    stepsSwiper1.slideTo(stepsSwiper3.activeIndex)
  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination-bullets')

  next.each((index, element) => {
    var nextJq = $(element)
    var prevJq = $(prev[index])
    var bulletsJq = $(bullets[index])
    var margin = 20
    nextJq.css('left', prevJq.width() + margin + bulletsJq.width() + margin)
    bulletsJq.css('left', prevJq.width() + margin)
  })

  $('.steps-swiper1').css('height', $('.steps-swiper1-pagination').height())
})
