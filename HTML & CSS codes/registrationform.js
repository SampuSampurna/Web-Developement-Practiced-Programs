document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const mandatoryTexts = document.querySelectorAll('.mandatory-text');
    const registerButton = document.querySelector('.register-button');
    function validateInputs() {
        let isValid = true;
        mandatoryTexts.forEach(function (mandatoryText) {
            const input = mandatoryText.previousElementSibling;
            if (input.value.trim() === '') {
                mandatoryText.style.display = 'block';
                isValid = false;
            } else {
                mandatoryText.style.display = 'none';
            }
        });
        return isValid;
    }
    function handleSubmit(event) {
       event.preventDefault();
        // Check if all mandatory fields are filled in
        
       let isValid =  validateInputs();
        if (isValid) {
            alert('Registration successful!');
           // form.reset();
        } else {
            alert('Please fill in all the mandatory fields.');
        }
    }
    function handleChange(event){
        let name = event.target.value;
        const mandatoryTexts = document.querySelectorAll('.mandatory-text');
        if(name.length > 5){
            mandatoryTexts[0].style.display = 'none';
        }
        }
    // Add event listener to the form instead of the register button
    form.addEventListener('submit', handleSubmit);
});
