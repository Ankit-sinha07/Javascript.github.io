const  alarmSubmit = document.getElementById('alarmSubmit')

alarmSubmit.addEventListener('click', setAlarm)
function setAlarm(e){
    e.preventDefault()
    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}.....`)
    
    now = new Date()

    let timeAlarm = alarmDate - now
    console.log(timeAlarm)

    if(timeAlarm >= 0){
        setTimeout(()=>{
            ringBell()
        }, timeAlarm)
    }



}