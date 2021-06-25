// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'q4KxrBxBHqY',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'FoM10R2T-8Y',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player3', {
        height: '390',
        width: '640',
        videoId: 'R1ZWR8rldEA',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player4', {
        height: '390',
        width: '640',
        videoId: 'DmyWUnL-WWU',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player5', {
        height: '390',
        width: '640',
        videoId: 'wHAxX8E1SUw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) { 
    event.target.playVideo(); 
}

//當狀態改變會執行此 function
var done = false;
function onPlayerStateChange(event) { 
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //stopVideo(); //立刻執行影片停止
        //setTimeout(stopVideo, 6000); //6秒執行影片停止
        //done = true;
    }
}

//影片停止 function
function stopVideo() { 
    players.stopVideo();
}