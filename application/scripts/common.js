/**
 * Created by baidu on 15/7/5.
 */

$(function(){
    var body = $('body');
    var sign_up=$('.sign_up');
    var log_in=$('.log_in');
    /* sign up */
    body.delegate('.sign_up_footer','click',function() {

        if(sign_up.hasClass('hide')){
            sign_up.removeClass('hide');
        }
        if(!log_in.hasClass('hide')) {
            log_in.addClass('hide');
        }
    })
    $('.sign_up_button').on('click',function(){
        $.post('../index.php/login',{
            data:{
                user_namr:$('.sign_up .user_input').val(),
                user_psw:$("[name='user_psw']").val()
            }
        },function(data){
            alert(data)
            if(data=="登录成功")
            {
                window.location="../index.php/ucenter";
            }
        })
    });
    $('.join_us').on('click',function(){
        $('.log_in_footer').trigger('click')
    })
    
    /* log in */
    body.delegate('.log_in_footer','click',function() {

        if(log_in.hasClass('hide')){
            log_in.removeClass('hide');
        }
        if(!sign_up.hasClass('hide')){
            sign_up.addClass('hide')
        }
    });
    $('.log_in_button').on('click',function(){
        var user_psw =$('.log_in .user_psw').val();

        if(user_psw===$('.log_in .repeat_psw').val()){
            $.post('xxx.php',{
                data:{
                    user_namr:$('.log_in .user_input').val(),
                    user_psw:user_psw,
                    user_email:$('.log_in .user_mail').val()
                }
            },function(data){
                alert(data)
            })
        }

    })

    /*close */
    $('.close').on('click',function(){
        $(this).parent().addClass('hide')
    })
});
