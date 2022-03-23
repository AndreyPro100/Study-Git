let one = document.querySelector('#one')
let two = document.querySelector('#two')
let but = document.querySelector('#but')
let elem = document.querySelector('#elem')
let val = document.querySelector('#val')
let val1 = document.querySelector('#val1')

val.addEventListener('focus', function() {
  val.value = ''
  console.log(val.value)
})

val.addEventListener('blur', function() {
  val.value = '2'
  console.log((Number(val.value)) ** 2)
})


but.addEventListener('click', function () {
    /*  elem.width = 300;*/
    /*  val.value += 'pass'*/
  val1.value = Number(val.value)**2
})