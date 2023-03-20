//Sample of students with their grades in a test
var students= [['Sonya', 90], ['Davi', 75], ['Sebastian', 64], ['Selo', 45], ['Mantix', 28]];
//A declaration of the graade test
var Avgmks = 0;
//A loop to commit/compute the total marks
for (var i=0; i < students.length; i++) {
        Avgmks += students[i][1];
        var mks= (Avgmks/students.length);
}
//Here is the grading system used to print the variables computed/defined
console.log("Average grade: " + (Avgmks)/students.length);
        if (mks < 40){
          console.log("Grade :E ");
          } 
        else if (mks < 49) {
                console.log("Grade : D"); 
                  } 
        else if (mks < 59 ) 
             {
                console.log("Grade : C"); 
        } else if (mks > 60 ) {
                console.log("Grade : B"); 
        } else if (mks >79) {
                console.log("Grade : A"); 

}