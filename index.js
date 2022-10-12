// Code your solution in this file!
//problem set #1
const feetPerBlock = 264
const numBlocks = 42
function distanceFromHqInBlocks(distance) {
    let total
    if (distance >= 42) {
        total = `${distance}` - 42
    } else {
        total = 42 - `${distance}`
    }
    return total
}
distanceFromHqInBlocks(distance)

//problem set #2
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * feetPerBlock
}
distanceFromHqInFeet(distance)

//problem set #3
function distanceTravelledInFeet(a, b) {
    if (a >= b){
        return (a - b) * feetPerBlock
    } else {
        return (b - a) * feetPerBlock
    }
}
distanceTravelledInFeet(a, b)

//problem set #4
function calculatesFarePrice(c, d) {
    let distance = distanceTravelledInFeet(c, d)
    if (distance <= 400) {
        return 0
    } else if (distance >= 400 && distance <= 2000) {
        return ((distance - 400)* 0.02)
    } else if (distance > 2000 && distance < 2500)
        return 25
      else (distance > 2500)
    return 'cannot travel that far'
}