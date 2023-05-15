// Task 1
// let array = [5, 6, 8, 10, 15, 23]

// example 1
// function sortArray (arr, number){

//    let newArr = arr.map(function(val){
//       if(val>=number){
//         return val
//       }
//     })

//     console.log(newArr);
// }

// sortArray(array, 9)                     // undifined

// example 2
// function sortArray(arr, number) {
//      let newArr = arr.filter(function (val) {
//             return val > number
//     })

//     console.log(newArr);
// }

// sortArray(array, 9)

///////////////////////////////////////////////////////////

// Task 2

// function oddNumbers (a, b){
//     if(a < b){
//         let arr = []
//         for(let i = a; i<=b; i++){
//             if(i % 2 === 0){
//                 arr.push(i)
//             }
//         }
//         console.log(arr.toString());
//     }

//     if(a > b){
//         let arr = []
//         for(let i = b; i<=a; i++){
//             if(i % 2 === 0){
//                 arr.push(i)
//             }
//         }
//         console.log(arr.toString());
//     }
// }

// oddNumbers(9, 2)                        // else payman chem grel vorovhetev misht bajanvox tiv linuma

///////////////////////////////////////////////////////////////////


// Task 5

// let array =[2, 12, 16, 48, 64]

// function growSequence(arr){
//     let result = 0
//     let flag = true
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > result){
//             result = arr[i]
//             console.log(-1);
//         }else{
//             flag = false
//             console.log(i);
//         }
//     }
//     return flag
// }

// growSequence(array)       

///////////////////////////////////////////////////////////////////

// Task 3

// function evenNumber(number){
//     let arr =[]
//     let flag = true
//     arr = ('' + number).split('')
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             i++
//         }else{
//             flag = false
//         }
//     }
//     console.log(flag);
    
// }

// evenNumber(457)

////////////////////////////////////////////////////////////////////