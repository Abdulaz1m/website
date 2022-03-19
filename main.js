let num = document.getElementById("num");
let calculate = document.getElementsByClassName("calculation")

document.getElementById("Plus").onclick = function () {
  let num_plus = num.innerHTML
  if (num.innerHTML < 1000){
    return num.innerHTML++
    let num_plus = num.innerHTML

  }
}

document.getElementById("Minus").onclick = function() {
  let num_minus = num.innerHTML
  if (num.innerHTML > 0){
    return num.innerHTML--
    let num_minus = num.innerHTML
  }
}



let enter = document.getElementById("enter")

enter.onclick = function () {
  return enter.innerHTML = num_inner
}