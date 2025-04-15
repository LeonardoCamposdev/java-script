const arr = [[1,2], [3,4], [5,6]];


arr.forEach((elemento)=>{
    elemento.forEach((item)=>{
        let multipliqueItens = item *=  item;
        console.log(multipliqueItens)
    })
})
function multipleAll(arr){

}

console.log(multipleAll(arr))