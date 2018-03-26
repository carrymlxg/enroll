$(function () {

    let submit=$('#sub');
    submit.on('click',function () {
        $('.title').remove();
        let data=$('#form1').serialize();
        let username= $('#username').val().trim();
        var sfz=$('#paper_sn').val().trim()
        var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
        if(username.length==0||sfz.length==0){
            $('<div class="title">请输入信息</div>').appendTo('.coda1').css({'color':'red','fontSize':'0.36rem','textAlign':'center'})
            return;
        }else if(!reg.test(sfz)){
            $('.coda1').remove('.title');
            $('<div class="title">身份证格式错误</div>').appendTo('.coda1').css({'color':'red','fontSize':'0.36rem','textAlign':'center'})
            return;
        }else{
            $('.coda1').detach('.title');
        }

        /*$.ajax({
            url:'',
            data:data,
            success:function (data) {
                if(data=='ok'){
                    alert('success')

                }else if(data=='error'){
                    alert('fail');
                }
            }
        })*/
    })
})