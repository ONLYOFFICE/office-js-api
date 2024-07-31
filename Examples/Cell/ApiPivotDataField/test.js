
function BasePerson() {

}

function Person() {

}

Person.prototype = Object.create(BasePerson.prototype);
Person.prototype.constructor = Person;

BasePerson.prototype.getKeka = function() {
    console.log('keka');
}



const keka = new Person();
keka.getKeka();