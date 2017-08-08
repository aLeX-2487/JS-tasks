document.getElementById("num").value=document.getElementById("myRange").value;
function numToRange(){
    var x=document.getElementById("num").value;
    document.getElementById("myRange").value=x;
    document.getElementById("deal").removeAttribute("disabled");
    if (isNaN(x)){
        alert("请输入数字格式");
        document.getElementById("num").value="";
    }
    else {
        if (x > 18 ||x < 6){
            alert("请输入正确的玩家数量");
            document.getElementById("num").value="";
        }
        else {
            document.getElementById("deal").removeAttribute("disabled");
        }
    }
    deal();
}
function RangeToNum(){
    document.getElementById("deal").removeAttribute("disabled");
    document.getElementById("num").value=document.getElementById("myRange").value;
    deal();
}
//减少按钮
function decrease(){
    document.getElementById("deal").removeAttribute("disabled");
    document.getElementById("myRange").value--;
    RangeToNum();
    deal();
}
//增加按钮
function increase(){
    document.getElementById("deal").removeAttribute("disabled");
    document.getElementById("myRange").value++;
    RangeToNum();
    deal();
}
//分配杀手和水民人数
function deal(){
    document.getElementById("deal").removeAttribute("disabled");
    var x=document.getElementById("num").value;/*若放在函数外，变量提升会将其提升到当前作用域的最前面，即全局的最前面相当于在脚本最前面获取 #num的值为12*/
    var killerNum;
    if (x==""){
        killerNum="0";
        civilianNum="0";
    }
    else if (x<15){
        killerNum=Math.ceil((x-5)/3);
    }
    else {
        killerNum=Math.ceil((x-6)/3);
    }
    document.getElementById("killerInput").value=killerNum;
    document.getElementById("civilianInput").value=x-killerNum;
}
//设置按钮
function setBy(){
    var a=document.getElementById("killerInput");
    a.removeAttribute("disabled");
    a.style.backgroundColor="#eccece";
    var b=document.getElementById("civilianInput");
    b.removeAttribute("disabled");
    b.style.backgroundColor="#eccece";
}
//修改每类身份的人数
function changeNum(){
    document.getElementById("deal").removeAttribute("disabled");
    var a=document.getElementById("killerInput");
    a.style.backgroundColor="transparent";
    var b=document.getElementById("civilianInput");
    b.style.backgroundColor="transparent";
    var c=parseInt(a.value)+ parseInt(b.value);
    if (isNaN(a.value)){
        alert("请输入数字格式")
    }
    else {
        if (c > 18 || c < 6 || a.value > 4){
            alert("请输入正确的玩家数量");
        }
        else {
            document.getElementById("num").value=c;
        }
    }
    if (isNaN(b.value)){
        alert("请输入数字格式")
    }
    else {
        if (c > 18 || c < 6 || b.value > 15){
            alert("请输入正确的玩家数量");
        }
        else {
            document.getElementById("num").value=c;
        }
    }
}
//发牌，本地储存玩家人数
function goAhead(){
    document.getElementById("deal").removeAttribute("disabled");
    if (document.getElementById("num").value==""){
        document.getElementById("deal").setAttribute("disabled","disabled");
    }
    else {
        var killerNum=document.getElementById("killerInput").value;
        var civilianNum=document.getElementById("civilianInput").value;
        if (typeof(Storage!==undefined)){
            sessionStorage.setItem("killerNum",killerNum);
            sessionStorage.setItem("civilianNum",civilianNum);
            window.location.href="page3.html";
        }
        else {
            alert("您的浏览器不支持sessionStorage");
        }
    }
}
