
//* array con i nomi dei Vip
const star = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];



//*  funzione per svolgere la richiesta
tableName = 'TavoloVip'
const TavoloVip = guests.map((guest, index) => {
    return {
        tableName: tableName,
        guestName: star,
        place: index + 1
    };
});

console.log(TavoloVip);