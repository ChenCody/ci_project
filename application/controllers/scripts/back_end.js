$(function(){
  var tab_body=$('.tab-body');

  tab_body.load('back_end/basic_set.html')

  // 点击切换tab
  $('.back-end-tab li').on('click',function(){
    var _this=$(this);
    _this.addClass('active').siblings().removeClass('active');
    tab_body.load('back_end/'+_this.data('area')+'.html')
  })

  //商品管理
  tab_body.delegate('.product-manage .delete','click',function () {
    var post_id = [];
    $('input:checked').each(function(i) {
      post_id.push($('tr').eq(i+1).data('id'))
    });
    console.log(post_id);
    $.post( 'index.html',{id:post_id},function () {
        $('input:checked').closest('tr').remove()
    });

  })
});
