/*第6单元 项目6-3 音乐播放器 js文件*/
var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");
var volume = document.getElementById("volume");
audio.controls = false;
//定义控制歌曲播放暂停的方法：togglePlayPause()。
//该方法中在切换播放暂停的同时需要切换字体图标和按钮的title属性值
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "暂停";
      playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      audio.play();
   } else {
      playpause.title = "播放";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
      audio.pause();
   }
}
//定义设置音量的方法：setVolume()，设置Audio对象的volume属性等于range控件的值
function setVolume() {
   audio.volume = volume.value;
}


