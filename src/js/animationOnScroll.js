function activate (activationPoint) {
  var elements = $('.animation:not(.active)')

  elements.each(function () {
    var el = $(this)
    var delay = ($(window).width() < 768 && el.hasClass('slideUp')) ? '' : el.attr('data-anim-delay')

    if (!el.hasClass('pulse')) { el.css({ visibility: 'hidden' }) }

    el.css({ 'animation-delay': delay })

    var elPosition = el.offset().top

    if (elPosition < $(window).scrollTop() + $(window).height() * activationPoint) {
      el.on('animationstart', () => {
        el.css({ visibility: '' })
      })

      el.on('animationend', () => {
        el.css({ 'animation-delay': '' })
      })

      el.addClass('active')
      console.log('class added')
    }
  })
}

$(document).ready(function () {
  activate(1)
  $(window).scroll(function () {
    activate(1.2)
  })
})
