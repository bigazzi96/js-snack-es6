

//SNACK 1

//* array con i nomi dei Vip
const star = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];



//*  funzione per svolgere la richiesta
tableName = 'TavoloVip'
const TavoloVip = star.map((guest, index) => {
    return {
        tableName: tableName,
        guestName: star,
        place: index + 1
    };
});

console.log(TavoloVip);


//SNACK 2

//*array
const aula = [
    {
        Id: 213,
        Name: 'Giuseppina della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84
    }
];

//*funzione per rendere i nomi in maiuscolo
const nomiMaiuscolo = aula.map(studente => studente.Name.toUpperCase());
console.log(nomiMaiuscolo);


