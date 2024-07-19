//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }
    addScores(score){
        this.scores.push(score);
    }
    average(){
        let avg;
        let total = 0;
        for(let i = 0; i < this.scores.length; i++){
            total += this.scores[i];
        }
        avg = total/this.scores.length;
        return Math.round(avg*10)/10;
    }
    status(){
        let avg = this.average();
        avg = Number(avg);
        if(avg > 90){
            return 'Accepted';
        } else if ( avg > 80 && avg < 90){
            return 'Reserved';
        } else if ( avg > 70 && avg < 80){
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
    print(){
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}`);
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad gator', 225, [75,78,62]);
bear.addScores(83);
console.log(bear);
console.log(maltese);
console.log(gator);
console.log(bear.scores);
console.log(maltese.average());
console.log(bear.status());
console.log(maltese.status());
console.log(gator.status());
bear.print();
maltese.print();
gator.print();
let numTests = 0;
while(gator.average() < 80) {
    gator.addScores(100);
    numTests++;
}

console.log(`Number of tests taken to get Reserved is ${numTests}`);
gator.print();



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.