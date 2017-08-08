var killNum=sessionStorage.getItem("killerNum");
var civilianNum=sessionStorage.getItem("civilianNum");
var arrKiller=[];
var arrCivilian=[];
var arrPlayer;
for (var i=0;i<killNum;i++){
    arrKiller[i]="杀手";
}
for (var k=0;k<civilianNum;k++){
    arrCivilian[k]="水民";
}
arrPlayer=arrKiller.concat(arrCivilian);
//洗牌函数，经典算法。
// 原理：假设数组有n个元素。
// 依次执行以下操作：
// 从前n位中随机抽出一个，与第n位进行交换
// 从前n-1位中随机抽出一个，与第n-1位交换
// ……
//从前1中随机抽出一个，与第1位交换
function shuffle(array){
    var len=array.length;
    for (var i=0;i<len;i++){
        var idx=Math.floor(Math.random()*(len-i));
        var temp=array[idx];
        array[idx]=array[len-i-1];
        array[len-i-1]=temp;
    }
    return array;
}
//调用洗牌函数
shuffle(arrPlayer);
sessionStorage.setItem("arrPlayer",arrPlayer);//存储以传给下一页面
console.log(arrPlayer);
console.log(arrPlayer.length);
//查看身份
var x=0;
function see(){
    if (x<arrPlayer.length){
        document.getElementById("contain1").style.display="none";
        document.getElementById("contain2").style.display="block";
        if (arrPlayer[x]==="杀手"){
            document.getElementById("role").innerHTML="角色：杀手";
            document.getElementById("remind_words").innerHTML="角色提示：积极发言分析，尽可能伪装成水民，刀法也很重要哦";
        }
        else {
            document.getElementById("role").innerHTML="角色：水民";
            document.getElementById("remind_words").innerHTML="角色提示：通过逻辑分析出隐藏的杀手";
        }
        x++;
        if (x<arrPlayer.length){
            document.getElementsByClassName("hidPage")[0].innerHTML=x;
            document.getElementsByClassName("hidPage")[1].innerHTML="隐藏并传递给"+ (x+1) +"号";
        }
        else{
            document.getElementsByClassName("hidPage")[0].innerHTML=x;
            document.getElementById("btn-hid").style.display="none";
            document.getElementById("judge-btn").style.display="block";
        }
    }
}
function hid(){
    if (x<arrPlayer.length){
        document.getElementById("contain1").style.display="block";
        document.getElementById("contain2").style.display="none";
        document.getElementsByClassName("seePage")[0].innerHTML=x+1;
        document.getElementsByClassName("seePage")[1].innerHTML="查看"+ (x+1) +"号身份";
    }
}/**
 * Created by Administrator on 2017/7/29.
 */
