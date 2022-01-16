class Person {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender
    }
}

class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

     rating(arr){
        this.pgMovies = arr.filter((el)=>{return el.rating==='PG'})

        return this.pgMovies
    }
}

let casionRoyale = new Movie('casionRoyale','Eon Productions','PG13');

console.log(casionRoyale);

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    
    get getRadius(){
        return this.radius
    }

    set setradius(newRadius){

        this.radius = newRadius;
    }

   

    get getColor(){
        return this.color
    }



}

const circle = new Circle(2,'black')
circle.setradius = 4
console.log(circle.getRadius);

