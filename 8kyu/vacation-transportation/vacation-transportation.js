function rentalCarCost(d) {
  let daily = 40 * d;
  if(d >= 7){
    daily -= 50;
  }
  if(d >= 3 && d < 7){
    daily -= 20
  }
  return daily;
}
