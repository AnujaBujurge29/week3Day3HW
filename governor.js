// Problem 1
class Governor {
  static GName = "John KL";
  static GSalary = 10000;
  static GMaxAge = 58;
  static GDetails(){
    console.log("There is only one Governor in the state ")
  }
}
console.log(`The Name of Governor is ${Governor.GName}`)
console.log(`His Salary is ${Governor.GSalary} and his retiredment age is ${Governor.GMaxAge}`)

// Problem 2
class Person{
  constructor(name, gender, age){
    this.PName = name;
    this.PAge = age;
    this.PGender = gender
    }
  extraLine(){
    console.log("------------------------------------------------------")
  }
  goodNews(){
    console.log("Hello all!!")
  }
  goodMorning(){
    console.log("Good Morning Everybody")
  }
}
class PostalWorker extends Person{
  show() {
      console.log("'"+this.PName+"' is a Postman and is a "+this.PGender+" with age "+this.PAge+".")
    }
  tell(){
    console.log(this.PName+"'s Salary is very Less.")
  }
}

class Chef extends Person{
   show() {
  console.log("'"+this.PName+"' is a Head-Chef and he is a "+this.PGender+" with age "+this.PAge+".")
    }
  tell(){
    console.log(this.PName+"'s Salary is very High.")
  }
}
const PostalWorker1 = new PostalWorker('Mr. Smith', "Male", 41)
console.log(PostalWorker1)
PostalWorker1.goodNews()
PostalWorker1.goodMorning()
PostalWorker1.show()
PostalWorker1.tell()
PostalWorker1.extraLine()

const PostalWorker2 = new PostalWorker('Mrs. Angela', "Female", 38)
console.log(PostalWorker2)
PostalWorker2.goodNews()
PostalWorker2.goodMorning()
PostalWorker2.show()
PostalWorker2.tell()
PostalWorker2.extraLine()


const chef1 = new Chef('Mr. Smith', "Male", 41)
console.log(chef1)
chef1.goodNews()
chef1.goodMorning()
chef1.show()
chef1.tell()
chef1.extraLine()

const chef2 = new Chef('Mrs. Angela', "Female", 38)
console.log(chef2)
chef2.goodNews()
chef2.goodMorning()
chef2.show()
chef2.tell()
chef2.extraLine()

