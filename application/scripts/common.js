/**
 * Created by baidu on 15/7/5.
 */

$(function(){
    /* sign up */
    $('.sign_up_footer').on('click',function() {
        var sign_up=$('.sign_up');
        if(sign_up.hasClass('hide')){
            sign_up.removeClass('hide');
        }
    })
    $('.sign_up_button').on('click',function(){
        $.post('xxx.php',{
            data:{
                user_namr:$('.sign_up .user_input').val(),
                user_psw:$('.sign_up .user_psw').val()
            }
        },function(data){
            alert(data)
        })
    })
    
    /* log in */
    $('.log_in_footer').on('click',function() {
        var log_in=$('.log_in');
        if(log_in.hasClass('hide')){
            log_in.removeClass('hide');
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
});
