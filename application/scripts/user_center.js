(function () {
  $('.user_tab li').on('click',function(){
    $('.tab_content ul li').fadeOut(400).eq($(this).index()).fadeIn(400)
  })
})();
