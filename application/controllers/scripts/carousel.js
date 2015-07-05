(function(){

  var aPiece=$('.aPiece');
  var num=aPiece.length;
  var classList=['before_before','before','active','next','next_next'];

  //ÂÖ²¥×ó¹ö
  var left_bar=$('.left_bar');
  var left_event= function () {
    left_bar.off('click');
    classList.forEach(function(_,index){
      var value=classList[4-index];
      var curEle=$('.'+value);
      if(index===classList.length-1){
        if(curEle.index()===0)
          aPiece.eq(num-1).addClass('before_before');
        else
          curEle.prev('div').addClass('before_before');
      }
      curEle.addClass(classList[5 - index]);
      curEle.removeClass(value);
    });
    setTimeout(function () {
      left_bar.on('click',left_event)
    },400)
  };
  left_bar.on('click',left_event);

  //ÂÖ²¥ÓÒ¹ö
  var right_bar=$('.right_bar');
  var right_event= function () {
    right_bar.off('click');
    classList.forEach(function(_,index){
      var value=classList[index];
      var curEle=$('.'+value);
      if(index===classList.length-1){
        if(curEle.index()===num-1) aPiece.eq(0).addClass('next_next');
        else curEle.next('div').addClass('next_next');
      }
      curEle.addClass(classList[index-1]);
      curEle.removeClass(value);
    });
    setTimeout(function () {
      right_bar.on('click',right_event)
    },400)
  };
  right_bar.on('click',right_event);

  //ÇÐ»»Ñ¡Ïî¿¨
  $('.tab_space div').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.detail_space .text div').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
  })

})();


