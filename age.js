let students = [{score: 10, name: 'fulano', age: 25},
                {score: 7, name: 'ciclano', age: 22},
                {score: 5, name: 'roberto', age: 36},
                {score: 9, name: 'claudio', age: 41},
                {score: 9, name: 'joana', age: 17}]

function analyseStudents(array_students){
    array_students.filter(aluno => aluno.age >=18).map((aluno) =>(console.log(`O aluno ${aluno.name} pode assistir o filme`)))
    array_students.filter(aluno => aluno.age <18).map((aluno) =>(console.log(`O aluno ${aluno.name} não pode assistir o filme`)))
    
    }