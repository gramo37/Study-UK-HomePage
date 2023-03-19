function toogleVideo(e) {
    console.log(e.parentNode.parentNode)
    let video = e.parentNode.parentNode.children[0]
    if(video.paused) video.play()
    else video.pause()
}