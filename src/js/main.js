document.addEventListener('DOMContentLoaded', function (event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  }

  function isModal () {
    return modal.classList.contains('modal--visible')
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  })

  closeBtn.addEventListener('click', switchModal)

  document.addEventListener('keydown', (event) => {
    var key = event.key || event.keyCode

    if ((key === 'Escape' || key === 'Esc' || key === 27) && isModal()) {
      switchModal()
    }
  })

  document.addEventListener('click', (event) => {
    if (isModal() && event.target.classList.contains('modal')) {
      switchModal()
    }
  })
})
