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
                var user_namr=$('.sign_up .user_input').val();
                window.location="../index.php/ucenter/name/"+user_namr;
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
        var user_psw =$('#password').val();
        var retype=$('#retype').val();
        var user_namr=$('.log_in .user_input').val();
        var user_email=$('#email').val();
        if(!user_namr)
        {
            alert('请输入用户名');
        }
        else if(!user_psw)
        {
            alert('请输入密码');
        }
        else if(!retype)
        {
            alert('请再次输入您的密码');;
        }
        else if(!user_email)
        {
            alert('请输入您的邮箱');;
        }
        else if(user_psw!=retype)
        {
            alert('两次输入的密码不一致');
        }
        else
        {
            $.post('../index.php/register',{
                data:{
                    user_namr:user_namr,
                    user_psw:user_psw,
                    user_email:user_email
                }
            },function(data){
                alert(data)
                if(data!="注册失败")
                {
                    window.location="../../../../index.php";
                }
            })
        }

    })

    /*close */
    $('.close').on('click',function(){
        $(this).parent().addClass('hide')
    })
});
