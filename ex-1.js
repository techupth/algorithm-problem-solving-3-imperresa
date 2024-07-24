function sortCustomerName(customers) {
  let n = customers.length
  for(let i = 0;i<n-1;i++){
    for(let j = 0;j<n-i-1;j++){
      console.log(customers[j]);
      if(customers[j]>customers[j+1]){
        let temp = customers[j]
        customers[j] = customers[j+1]
        customers[j+1] = temp
      }
    }
  }
  return customers
}

// ตอบคำถามตรงนี้จ้า

// O(n²) เพราะมีการซ้อนลูป 2 ชั้น จึงทำให้รอบเพิ่มขึ้นแบบเท่าตัวตามขนาด input

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]
console.log(sortCustomerName(customers));