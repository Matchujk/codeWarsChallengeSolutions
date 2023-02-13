function hero(bullets, dragons){
  let kill = Math.floor(bullets / 2) ;
  if(kill >= dragons){
    return true
  } else {
    return false
  }
 }
