interface Person{
    name: string,
    age: number,
    speak(lang: string): void
    spend(amount: number): number
}

const henry : Person = {
    name: 'Henry',
    age: 30,
    speak(lang: 'Vietnamese'){
        console.log(lang);
    },
    spend(amt: 500000): number{
        return amt
    }
}

const helloPerson = (person: Person) => {
    console.log(`Helloo ${person.name}`)
}

helloPerson(henry);