(function () {
  const play = document.querySelector('.player__play')
  const pause = document.querySelector('.player__pause')
  const loop = document.querySelector('.player__loop')
  const loopIcon = document.querySelectorAll('.player__loop-icon')
  const pre = document.querySelector('.player__pre')
  const next = document.querySelector('.player__next')
  const dot = document.querySelector('.player__dot')
  const album = document.querySelector('.player__album-container')
  const currentTime = document.querySelector('.player__current')
  const durationTime = document.querySelector('.player__duration')
  const audio = new Audio('./audio/god is a woman.mp3')

  var tikTok

  play.addEventListener('click', function () {
    audio.play()
    durationTime.innerText = `-${timeFormat(Math.round(audio.duration / 60))}:${timeFormat(Math.round(audio.duration % 60))}`

    tikTok = setInterval(function() {
      var progress = Math.round(audio.currentTime)/Math.round(audio.duration) * 100;
      dot.style.left = progress + '%'

      currentTime.innerText = `${timeFormat(Math.round(audio.currentTime / 60))}:${timeFormat(Math.round(audio.currentTime % 60))}`
      console.log(audio.currentTime, audio.ended)
      if (audio.ended && !audio.loop) {
        clearInterval(interval)
      }
    },500);

    album.classList.add('player__album--play')
    album.style['animation-play-state'] = 'running'
    this.classList.add('player__btn--hide')
    pause.classList.remove('player__btn--hide')
  })

  pause.addEventListener('click', function () {
    audio.pause()
    clearInterval(tikTok)

    album.style['animation-play-state'] = 'paused'
    this.classList.add('player__btn--hide')
    play.classList.remove('player__btn--hide')
  })

  loop.addEventListener('click', function () {
    audio.loop = !audio.loop

    if (audio.loop) {
      loopIcon.forEach((i) => {
        i.style.fill = '#90CEC2'
      })
    } else {
      loopIcon.forEach((i) => {
        i.style.fill = '#fff'
      })
    }
  })

  function timeFormat(time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

})()