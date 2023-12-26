// -----1-masala
// 1. Berilgan massivning ichidan berilgan qiymat bor yoki yoqligini tekshiruvchi funksiya yozing.

// function qiymatniTekshir(massiv, qiymat) {
//     for (let element of massiv) {
//     if (element === qiymat) {
//     return true; 
//     }
//     }
    
//     return false; 
//    }
   
//    let sonlar = [1, 2, 3, 4, 5];
//    let borliginiTekshir = qiymatniTekshir(sonlar, 3);
//    console.log(borliginiTekshir); 
   
//    let ismlar = ["Ali", "Vali", "Soli"];
//    let yoqliginiTekshir = qiymatniTekshir(ismlar, "Hasan");
//    console.log(yoqliginiTekshir); 
   

// ----------2-masala
// 2. Quyidagi kabi obyektlardan tashkil topgan massiv berilganda uning ichidan berilgan qiymatlarga mos keluvhi funksiya yozing.

// function filterProducts(products, prop, value) {
//     let filteredProducts = [];
    
//     for (let product of products) {
//     if (product[prop] === value) {
//     filteredProducts.push(product);
//     }
//     }
    
//     return filteredProducts;
//    }
   
//    const products = [
//     { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//     { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//     { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//     { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
//    ];
   
//    console.log(filterProducts(products, 'brand', 'Apple'));
   
//    console.log(filterProducts(products, 'price', 1199.99));
   
   
// ----------3-masala
// 3. Quyidagi kabi massiv berilganda uning ichidan yoshlarining o'rtachasini topuvchi funksiya yozing.

// const students = [
//     { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
//     { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
//     { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
//    ];
   
//    function findAverageAge(students) {
//     let totalAge = 0;
//     for (let i = 0; i < students.length; i++) {
//     totalAge += students[i].age;
//     }
//     return totalAge / students.length;
//    }
   
//    const averageAge = findAverageAge(students);
//    console.log("O'rtacha yosh:", averageAge);
   

// ----------4-masala
// 4. Quyidagi kabi massivni priority boyicha saralab beradigan funksiya yozing

// const tasks = [
//     { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
//     { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
//     { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
//     { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
//    ];
   
//    function sortTasksByDeadline(tasks) {
//     tasks.sort((task1, task2) => {
//     const date1 = new Date(task1.deadline);
//     const date2 = new Date(task2.deadline);
//     return date1 - date2;
//     });
//    }
   
//    sortTasksByDeadline(tasks);
//    console.log(tasks);


// ----------5-masala
// 5. Berilgan massivdan berilgan oraliqdan berilgan oraliqqacha bolgan qiymatlarni olib beruvchi funksiya yozing.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getValuesInRange(arr, start, end) {
 const result = [];
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] >= start && arr[i] <= end) {
 result.push(arr[i]);
 }
 }
 return result;
}

const start = 2;
const end = 9;
const valuesInRange = getValuesInRange(arr, start, end);
console.log(valuesInRange);
