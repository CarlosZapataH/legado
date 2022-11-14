function run() {
  if ($('#addUserLogin')) {
    $('.modal .box-users').show()
    $('.modal .box-form').hide()

    $('.modal #btn-add-user').on('click', function () {
      $('.modal .box-users').hide('slow')
      $('.modal .box-form').show('slow')
    })

    $('.modal #btn-back').on('click', function () {
      $('.modal .box-users').show('slow')
      $('.modal .box-form').hide('slow')
    })

    $('.modal #btn-save-user').on('click', function () {
      $('.modal .box-users').show('slow')
      $('.modal .box-form').hide('slow')
    })
  }
}

$(function () {
  run()
})
