//(Classifique uma nota para alunos de acordo com a nota média

//0 - 59: E
// 60 - 69: D
// 70 - 79: C
//80 - 89: B
//90 - 100: A

const marks = [80, 95, 100];

let soma = 0;
function calculateGrade(array){
  array.filter((materia)=>{
    soma += materia;
  })
  if(soma / 3 <= 59){
    return 'Sua nota foi: "E"'
  }
  else if(soma / 3 === 60 || soma / 3 <= 69){
    return 'Sua nota foi "D"'
  }

  else if(soma / 3 === 70 || soma / 3 <= 79){
    return 'Sua nota foi "C"'
  }

  else if(soma / 3 === 70 || soma / 3 <= 79){
    return 'Sua nota foi "C"'
  }

  else if(soma / 3 === 80 || soma / 3 <= 89){
    return 'Sua nota foi "B"'
  }

  else if(soma / 3 === 90 || soma / 3 <= 100){
    return 'Sua nota foi "A"'
  }
}

console.log(calculateGrade(marks));