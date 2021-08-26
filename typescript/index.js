var henry = {
    name: 'Henry',
    age: 30,
    speak: function (lang) {
        console.log(lang);
    },
    spend: function (amt) {
        return amt;
    }
};
var helloPerson = function (person) {
    console.log("Helloo " + person.name);
};
helloPerson(henry);
