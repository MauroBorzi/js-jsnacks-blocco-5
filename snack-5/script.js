const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const newNums = []

nums.filter((num) => {
  if (num % 2 === 0) {
    newNums.push(num)
  }
})

console.log(newNums)

// Risultato: [2, 8, 4, 12]