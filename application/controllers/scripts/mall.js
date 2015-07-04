(function(){
  /*商城页下方的选项卡切换效果*/
  $('.nav_list>li').on('mouseover',function(){
    $(this).find('a div').css('background-color','#2f2f2f');
    $(this).find('.tab-list').removeClass('hide');
  }).
    on('mouseout',function(){
      $(this).find('a div').css('background-color','transparent')
      $(this).find('.tab-list').addClass('hide')
    })
})();
