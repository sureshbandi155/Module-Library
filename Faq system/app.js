var faqQuestion1 = document.querySelector('#first');
var singleQuestion = document.querySelector('.single-question');
faqQuestion1.addEventListener('click', () => {
    faqQuestion1.style.borderBottom= '1px solid #000';
    faqQuestion1.style.cursor= 'pointer';
    console.log(faqQuestion1.textContent);
    singleQuestion.innerHTML = faqQuestion1.textContent;
});
