const newYears = "1 Jan 2023"

const showDays = document.getElementById('days')
const showHours = document.getElementById('hours')
const showMins = document.getElementById('mins')
const showSeconds = document.getElementById('seconds')

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    console.log(currentDate)

    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const mins = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds % 60)

    showDays.innerHTML = days
    showHours.innerHTML = formatTime(hours)
    showMins.innerHTML = formatTime(mins)
    showSeconds.innerHTML = formatTime(seconds)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}
countDown()

setInterval(countDown,1000)