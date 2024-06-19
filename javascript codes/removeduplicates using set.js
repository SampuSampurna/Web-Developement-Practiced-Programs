function removeDuplicated(arr){
    return [...new Set(arr)];
}
let newarr1=[1,2,3,4,1,2,3,4];
console.log(removeDuplicated(newarr1))