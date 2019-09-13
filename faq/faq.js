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


$(document).ready(function(){
    var searchBoxInput = $('#search');
    var heading = $('.faq_wd_9 .single-question h3');
    var list = $('.faq_wd_9 .single-question ul li');
    var topics = $('.faq_wd_9 .all-questions h5');
    var hideText = $('.faq_wd_9 .hide-text');
    console.log(searchBoxInput);
    topics.click(function(){
        var tab_id = $(this).attr('data-tab');
        heading.text($(this).text());
        topics.removeClass('current');
        $('.single-question').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    list.each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    hideText.hide();
    searchBoxInput.keyup(function(){
        var searchTerm = $(this).val().toLowerCase();
        console.log(searchTerm);
        list.each(function(){
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1 ) {
                $(this).show(300);
                //$(this).parent().parent().show();
            }
            else {
                $(this).hide(300);
                //$(this).parent().parent().hide();
            }
        });
        var countQuestions = $('.faq_wd_9 .single-question ul li:visible').length;
        console.log('countList' +countQuestions);
        if(countQuestions === 0){
            //  $('.hide-text').addClass('show');
            $('.hide-text').show();
        }
        else{
            //   $('.hide-text').removeClass('show');
            $('.hide-text').hide();
        }
    });
});