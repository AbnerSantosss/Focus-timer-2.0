export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonDarkMode,
  buttonDayMode,
  muderMode
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function darkMode() {
    buttonDarkMode.classList.add('hide')
    buttonDayMode.classList.remove('hide')
  }
  function dayMode() {
    buttonDarkMode.classList.remove('hide')
    buttonDayMode.classList.add('hide')
    muderMode.setProperty('--color-background-page', '#9ecfdd')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos Minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
    darkMode,
    dayMode
  }
}
