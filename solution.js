//First person object
var john = {
    fullName: 'John Smith',
    mass: 81,  //in kg
    height: 1.7,  //in meters
    calcBMI: function(){
        return this.mass/(this.height * this.height);
    }
};
console.log(john.calcBMI());

//Second person object
var mark = {
    fullName: 'Mark Vendor',
    mass: 75,    //in kg
    height: 1.2,   //in meters
    calcBMI: function(){
        return this.mass/(this.height * this.height);
    }
};
console.log(mark.calcBMI());


// Saving BMI to object
var john = {
    fullName: 'John Smith',
    mass: 81,  //in kg
    height: 1.7,  //in meters
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
    }
};
john.calcBMI();
console.log(john);


var mark = {
    fullName: 'Mark Vendor',
    mass: 75,    //in kg
    height: 1.2,   //in meters
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
    }
};
mark.calcBMI();
console.log(mark);


//Comparing both BMIs
if (mark.BMI > john.BMI){
    console.log(mark.fullName + ' has the highest BMI of '+ mark.BMI);
}else if(mark.BMI === john.BMI){ 
    console.log(mark.fullName + 'and' + john.fullName + 'have equal BMI.');
}else{    
    console.log(john.fullName + ' has the highest BMI of '+ john.BMI);
};    
