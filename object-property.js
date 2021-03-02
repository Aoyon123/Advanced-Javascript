const student=[
    {
        id:21,
        name:"Omar Sunny"
    },
    {
        id:41,
        name:"Fahamidul"
    },
    {
        id:51,
        name:"Aoyon"
    },
    {
        id:61,
        name:"Rafi"
    }    
]

const names=student.map(s=>s.name)

const id=student.map(s=>s.id)

const bigger=student.filter(s=>s.id>40);
const biggerOne=student.find(s=>s.id>40);
console.log(biggerOne.id);
console.log(names,id)
console.log(bigger)