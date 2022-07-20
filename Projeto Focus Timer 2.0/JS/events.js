import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTimer,
  buttonDecrement,
  buttonRain,
  buttonForest,
  buttonCoffee,
  buttonFireplace,
  buttonSet,
  secondsDisplay,
  minutesDisplay,
  buttonDarkMode,
  buttonDayMode
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  //===================BUTTON-INCREMENT========================//
  buttonAddTimer.addEventListener('click', () => {
    timer.increment()
  })
  buttonDecrement.addEventListener('click', () => {
    timer.decrement()
  })
  //===================CARDS-SONS================================//
  buttonRain.addEventListener('click', function () {
    sound.Rain()
  })

  buttonForest.addEventListener('click', function () {
    sound.Forest()
  })

  buttonCoffee.addEventListener('click', function () {
    sound.Coffee()
  })
  buttonFireplace.addEventListener('click', function () {
    sound.Fireplace()
  })
  //===================BUTTONS-DARK-MODE================================//
  buttonDarkMode.addEventListener('click', () => {
    controls.darkMode()
  })
  buttonDayMode.addEventListener('click', () => {
    controls.dayMode()
  })
}
