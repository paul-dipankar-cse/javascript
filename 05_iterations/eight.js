const myNums =[1,2,3]
const mytotal = myNums.reduce( (acc, curVal) => {
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal
}, 0)               //initialValue = 0, it is given to accumulator for first time

console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "datas cience course",
        price: 5999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);