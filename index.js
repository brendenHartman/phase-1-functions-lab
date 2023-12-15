function distanceFromHqInBlocks(local) {
    if(local >= 42) {
      return local - 42;
    }
    else {
    return 42 - local;
    }    
}

function distanceFromHqInFeet(local) {
    return distanceFromHqInBlocks(local) * 264;
}

function distanceTravelledInFeet(start, end) {
    if(end >= start){
        return  (end - start) * 264
    }
    else{
        return (start - end) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let result = "";
    const feet = distanceTravelledInFeet(start, destination);
    feet <=400 
    ? result = 0 
    : (feet > 400 && feet <= 2000)
    ? result = 2.56
    : (feet > 2000 && feet <= 2500)
    ? result = 25
    : result = "cannot travel that far"
    return result;
}    