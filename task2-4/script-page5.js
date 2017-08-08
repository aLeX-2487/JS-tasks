/**
 * Created by Administrator on 2017/8/3.
 */

$("hr").height($("main").height()-70);
$(function(){
    $(".step1").click(function(){
        location.href="page6.html";
    });
    var x=sessionStorage.getItem("dead");
    var len= x.length;
    var dieOrder=Number(x[len-1]);
    var arrPlayer=sessionStorage.getItem("arrPlayer").split(",");
    var y=arrPlayer[dieOrder];
    if (len > 0){
        console.log(x);
        $(".result1").text(dieOrder+1+"号被杀手杀死，真是身份是"+y);
    }
});
