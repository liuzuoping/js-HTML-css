/*第6单元 项目6-2 HTML5 Web钢琴 js文件*/

//页面加载完毕后执行
window.onload = function(){
    //获取所有的div琴键
    var mydivs = document.getElementsByTagName("div");
    //获取所有的audio音频源
    var myaudios = document.getElementsByTagName("audio");
    //通过数组的下标获取每个琴键和每个音频，数组的下标从0开始。
    // 使用for循环来循环调用音频的load()和play()方法
    for(var i = 0 ; i <14; i++){
        mydivs[i].index = i;
        //当鼠标单击某个琴键时，加载相应的音频（调用load()方法），并且播放（调用play()方法）
        mydivs[i].onclick = function(){
            myaudios[this.index].load(); //保持余音绕梁，开启新的声音
            myaudios[this.index].play();
        }
    }
}
