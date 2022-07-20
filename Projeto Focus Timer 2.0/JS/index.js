import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sound from './sounds.js'
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

const sound = Sound()

//========CONTROLS=============//
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonDayMode,
  buttonDarkMode
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({ controls, timer, sound })
