/**
 * @author chenqi14
 */

$(function () {
    //图片预览
    $('.img-add li input[type=file]').on('change' ,function (e) {
        var _this = $(this);
        var reg = /[gif|jpg|png]$/i;
        if (reg.test(e.target.files[0].name)) {
            if(window.FileReader) {
                var f = e.target.files[0];

                var reader = new FileReader();
                reader.onload = (function (file) {
                    return function(e) {
                        $('.img-big-show').html('<img src="'+ this.result +'">')
                        _this.closest('li').find('.thumb_show').html('<img src="'+ this.result +'">');
                    }
                })(f);
                reader.readAsDataURL(f)
            }

            //IE
            if (navigator.appName === "Microsoft Internet Explorer") {
                var ext = this.value.split(".")[1];
                if (!(/^(jpg|jpeg|JPG|JPEG|png|PNG|pdf)$/.test(ext))) {
                    alert('图片格式不正确,请选择图片格式的文件!');
                    return;
                }
                document.getElementsByClassName('img-show')[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = this.value;
            }
        }
        else {
            alert('格式不正确啊喵帕斯~')
        }


    });

});
