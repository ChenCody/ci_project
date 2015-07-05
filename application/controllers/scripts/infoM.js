$('.cart_list').delegate('li','swipeLeft', function () {
  if(!$(this).hasClass('deleting'))
    $(this).css('left','-50px').addClass('deleting');
})
  .delegate('li','swipeRight',function(){
    if($(this).hasClass('deleting'))
      $(this).css('left',0).removeClass('deleting')
  });

$('.delete_bottom').on('tap',function(){
  $(this).closest('li').css('overflow','hidden').animate({height:0},300, function() {
    $(this).remove();
  })
})
