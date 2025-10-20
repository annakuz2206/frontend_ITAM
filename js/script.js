/*задание 1*/
const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] },
    { name: "Роман", scores: [82, 60, 88] },
    { name: "Алиса", scores: [81, 72, 90] },
    { name: "Максим", scores: [56, 99, 44] },]
function calculateGrade(students){
    for(let student of students){
        let sum = 0;
        for(let i = 0; i < student.scores.length; i++){
            sum += student.scores[i];
        }
        student.average = (sum/student.scores.length).toFixed(2);
        if (student.average >= 90){
        student.grade = 'A';
        } 
        else if(student.average >= 80){
        student.grade = 'B';
        }
        else if(student.average >= 70){
        student.grade = 'C';
        }
        else{
        student.grade = 'F';
        }
    }
    return students;
}
console.log(calculateGrade(students))

/*задание 2*/
const products = [
    { name: "Ноутбук", price: 5000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" },
    { name: "Самокат", price: 19000, category: "транспорт" },
    { name: "Тостер", price: 8000, category: "электроника" },
];
const filters = { maxPrice: 20000, category: "электроника" };
const result = [];
function filterProducts(products, filters) {
    if (!filters || Object.keys(filters).length === 0){
        return products;
    }
    for(let product of products){
        let allowablePrise = product.price <= filters.maxPrice;
        let desiredCategory = filters.category === product.category;
        if(desiredCategory && allowablePrise){
            result.push(product);
        }
    }  
    return result; 
}
console.log(filterProducts(products, filters));