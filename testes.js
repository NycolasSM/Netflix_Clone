function funcao123(params) {
  
}

const funcao2 = function (func, arg) {
  return func(arg);
}

funcao2(funcao123, 'Nycolas')

class Classe1 {
  constructor(name) {
    this.name = name
  }

  greeting(message) {
    return `${message} ${this.name}`
  }
}

const funcaoClasse = (name) => {
  return {

    greeting: (message) => {
      return `${message} ${name}`
    }
  }
}


const c1 = new Classe1("Nycolas")
const c2 = funcaoClasse("Nycolas")


const sayHello1 = c1.greeting.bind(c1);
const sayHello2 = c2.greeting;

console.log(sayHello1("Hello 1"))
console.log(sayHello2("Hello 2"))


