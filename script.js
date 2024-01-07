             // Çalışma N=1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number (ex. myFunc([1,2,3,4,5], 4))//
// . Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni//
//  array-ə yığmalısız (myFunc([1,2,3,4,5], 4) => [1,2,3,4])//
let arr1 = [1, 3, 4, 5, 16, 7, 17, 8, 19];
let arr2 = [];
const Funksiya = (arr1, number) => {
  for (let i = 0; i < number; i++){
    arr2.push(arr1[i]);
 }
  console.log(arr2);
};
Funksiya(arr1, 7);
             // Çalışma N=2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil//
// olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.//
//(ex findMultiples(2, 6) = > result = [2, 4] or findMultiples(5, 30) = > result = [5, 10, 20])//
let array = [];
const findMultiples = (number, limit) => {
  for (let i = number; i <= limit; i *= 2){
    array.push(i);
 }
  console.log(array);
};
findMultiples(1, 10);
             // Çalışma N=3.Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın//
// (ex. count(10) => result = [1,2,3,4,5,6,7,8,9,10])//
let newArray = [];
const count = (number) => {
  for (let i = 1; i <= number; i++){
    newArray.push(i);
}
  console.log(newArray);
};
count(10);