 let btn = document.querySelector('.btn1')
let author = document.querySelector('.author')
let quote = document.querySelector('.Quote')

const quotes = [{
    quote : `"Blood, sweat and respect. First two you give, last one you earn."`,
    person: `The Rock`
},{
    quote : `"The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion."`,
    person: `Mr.Olympia (Arnold)`
},
{
    quote : `"The only place where success comes before work is in the dictionary."`,
    person: ` Vidal Sassoon`
},
{
    quote : `"If you think lifting is dangerous, try being weak. Being weak is dangerous."`,
    person: `Bret Contreras `
},
{
    quote : `"All progress takes place outside the comfort zone."`,
    person: `Micheal John Bobak`
},
{
    quote : `"Success usually comes to those who are too busy to be looking for it."`,
    person: `Henry David Thoreau`
}
];
function gg(){
    let random = Math.floor(Math.random()* quotes.length)
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].person
};
console.log(Math.random());
