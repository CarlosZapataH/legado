// Test import of styles
import '@/styles/main.scss'
import '@/styles/event.scss'
import '@/styles/events.scss'
import '@/styles/car.scss'
import '@/styles/register.scss'
import '@/styles/thanks.scss'

require('bootstrap-icons/font/bootstrap-icons.css')
import * as bootstrap from 'bootstrap'

$('a.scrolling').click(function (e) {
  e.preventDefault()
  goToByScroll($(this).attr('href'))
  $(`#menu`).removeClass('active')
  $(`#hamburguesa`).removeClass('active')
})

function goToByScroll(id) {
  $('html,body').animate({ scrollTop: $(id).offset().top - 100 }, 2000)
}

/* Menu */
$(`#hamburguesa`).on('click', () => {
  $(`#menu`).toggleClass('active')
  $(`#hamburguesa`).toggleClass('active')
})

$('.cta-shop__close').click(function (e) {
  e.preventDefault()
  $('#cta-shop').hide()
})

function setWidth() {
  try {
    var width = document.getElementById('column-form')
    if (width && width?.offsetWidth > 0) {
      document.getElementById('wrapper-form').setAttribute('style', `width:${width?.offsetWidth}px`)
    }
  } catch (error) {}
}

function runQuantity() {
  let spinNumberOutput = document.querySelector('.quantity input')
  let plusButton = document.querySelector('.quantity .plus')
  let minusButton = document.querySelector('.quantity .less')

  if (spinNumberOutput && plusButton && minusButton) {
    spinNumberOutput.value = 1

    plusButton.addEventListener('click', function () {
      spinNumberOutput.value++
    })

    minusButton.addEventListener('click', function () {
      if (spinNumberOutput.value > 1) {
        spinNumberOutput.value--
      }
    })
  }
}

window.onload = function () {
  window.addEventListener('resize', function (event) {
    setWidth()
  })
  setWidth()
  runQuantity()

  //jQuery.noConflict()
  //$('#exampleModal').modal('show')
}
