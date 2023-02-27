// Rewrite the following code using template literals
// const printBill = (name, bill) => {
//                      return “Hi “ + name + “, please pay: “ + bill;
//            }

window.addEventListener("load",()=>{
const printBill = (name, bill) => `Hi  ${name}, please pay: ${bill}`;
console.log(printBill('Jogi',1000));  
}
