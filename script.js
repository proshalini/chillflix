const accordian= document.querySelectorAll('.accordian')

document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with class 'question'
    var questions = document.querySelectorAll('.question');

    // Add click event listener to each question
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            // Toggle 'show' class on the corresponding answer
            var answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});

function toggleLanguages() {
    var languageOptions = document.getElementById('language-options');
    languageOptions.classList.toggle('hidden');
  }
  
  function changeLanguage(languageCode) {
    // Here you can implement logic to change the language on your website
    // For example, you might use AJAX to fetch content in the selected language
    // and update the page without reloading.
    console.log('Language changed to:', languageCode);
    // Add your language change logic here
  }
  