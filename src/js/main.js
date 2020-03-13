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
})
