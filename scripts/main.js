function extractTimeDuration(milliseconds) {
  const s = milliseconds / 1000

  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor(((s % 86400) % 3600) / 60)
  const seconds = Math.floor(((s % 86400) % 3600) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

const daysText = document.querySelector('#days>.amount')
const hoursText = document.querySelector('#hours>.amount')
const minutesText = document.querySelector('#minutes>.amount')
const secondsText = document.querySelector('#seconds>.amount')

setInterval(() => {
  const date = Date.now()
  const thisYear = new Date(date).getFullYear()
  const nextNewYear = new Date(`${thisYear + 1}-01-01T00:00:00.0Z`).getTime()

  const duration = nextNewYear - date

  const {days, hours, minutes, seconds} = extractTimeDuration(duration)

  daysText.textContent = days
  hoursText.textContent = hours
  minutesText.textContent = minutes
  secondsText.textContent = seconds
}, 500)
