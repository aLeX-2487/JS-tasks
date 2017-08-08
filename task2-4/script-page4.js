var arrPlayer=sessionStorage.getItem("arrPlayer").split(",");
var len=arrPlayer.length;
for (var i=0;i<len-1;i++){
    var clone=document.getElementsByClassName("items")[0].cloneNode(true);
    document.getElementById("contain").appendChild(clone);
}
for (var k=0;k<len;k++){
    document.getElementsByClassName("order")[k].innerHTML=k+1;
    document.getElementsByClassName("playerType")[k].innerHTML=arrPlayer[k];
}
/**
 * Created by Administrator on 2017/7/31.
 */
