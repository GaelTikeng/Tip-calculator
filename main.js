let amount = document.querySelector('.amount')
let percentage = document.querySelector('.percentage')

function calculatePercentage() {  
  let u = parseInt(percentage.value)
  let amt = parseInt(amount.value)
  let x = ((u/100) * amt)
  if (amount.value === '' && percentage.value === '') {
    document.querySelector('.display').innerHTML = 'Please enter amount'
  } else {
    document.querySelector('.display').innerHTML = `The TIP is ${x} FCFA`
  }
}