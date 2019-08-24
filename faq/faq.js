var question = $('.select-question');
question.on('click', function => {
    console.log (question);
    question.css({'fontWeight': 500, color: '#000'});
    question.style.borderBottom = '1px solid #000';

});
var question = $('.select-question').click ( () => {
    console.log ('click');
    question.addClass('bold').siblings().removeClass('bold');
});