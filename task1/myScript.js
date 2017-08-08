/**
 * Created by Administrator on 2017/7/18.
 */
var arr=document.getElementsByClassName("item");
/*重置*/
function reset(){
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor="#fea500";
    }
}
/*闪烁函数*/
function shining(){
    /*随机获取三个格子*/
    var a, b,c;
    do {
        a=Math.floor(Math.random()*arr.length);
        b=Math.floor(Math.random()*arr.length);
        c=Math.floor(Math.random()*arr.length);
    }
    while(a==b || b==c || a==c);
    arr[a].style.backgroundColor="#"+("000000"+Math.round(Math.random()*(16777200+1)).toString(16)).slice(-6);
    arr[b].style.backgroundColor="#"+("000000"+Math.round(Math.random()*(16777200+1)).toString(16)).slice(-6);
    arr[c].style.backgroundColor="#"+("000000"+Math.round(Math.random()*(16777200+1)).toString(16)).slice(-6);
    setTimeout(reset,500); //闪烁0.5s后恢复正常颜色
}
/*闪烁开始*/
var int;
function beginning(){
    clearInterval(int);/*防止连续多次点击后多次触发clearInterval()函数*/
    int=setInterval(shining,1000);
}
/*闪烁结束*/
function over(){
    clearInterval(int);
}
