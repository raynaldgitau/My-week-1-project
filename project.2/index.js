function speedDetect(speed) {
    if (speed <=70) {
        console.log('OK')
    } else {
        speed -= 70
        let demeritPoints = 0
        while (speed >= 5) {
            speed -= 5
            demeritPoints++
        }
        console.log(demeritPoints)
    }
}
speedDetect(120)