$(function(){
/*按照玩家配比生成div*/
    var arrPlayer=sessionStorage.getItem("arrPlayer").split(",");
    var len=arrPlayer.length;
    for (var i=0;i<len-1;i++){
        $(".items").first().clone(true).appendTo("#contain");//为什么将first()方法生效，get(0)不生效
    }
    for (var k=0;k<len;k++){
        $(".order")[k].innerHTML=k+1;
        $(".playerType")[k].innerHTML=arrPlayer[k];
    }

/*判断哪些是上轮被杀死的*/



/*将杀手杀死的人提交*/

    /*讲选中的人标记出来*/

    $(".icon").click(function(){
        if ($(this).siblings().children().filter(".playerType").text()=="杀手"){
           alert("你他妈连我都杀");
       }
        else {
            $(".icon").removeClass("chose");
            $(this).addClass("chose");
            $(".confirm").attr("disabled",false);
        }
    });
    /*确认按钮,还应该设置必须选择杀死谁之后才能点击这个按钮*/

    $(".confirm").click(function(){
        $(".chose").siblings().addClass("dead");
        if (typeof(Storage!==undefined)){
            var dieOrder=$(".item").index($(".dead"));//死者在item中的序号。$(".item").index($(".dead"))返回的一个数值类型
            if (typeof (sessionStorage.getItem("dead")==null)){
                var dead=[];//声明一个数组来存储所有死者的序号
                dead.push(dieOrder);
            }
            else {
                sessionStorage.getItem("dead").push(dieOrder);
            }
            sessionStorage.setItem("dead",dead);
        }
        else {
            alert("您的浏览器不支持sessionStorage");
        }
        location.href="page5.html";
    });








});


