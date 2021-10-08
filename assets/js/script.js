let formSubmit = $('.contact-section__submit')

formSubmit.on('click', clearValues)

function clearValues() {
    let formInput = $('.form-input')
    formInput.val("")
}
