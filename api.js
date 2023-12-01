let quotes = document.querySelector("#quote");
let author = document.querySelector("#heading");

const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0c14a486dmshdfce364093d5515p1a31ebjsn6b58e8a3b49f',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function quote(){
await fetch(url,options).then((response)=>{return response.json()})
.then((value)=>{
    // console.log(value)
    author.innerText=value.originator.name
    quotes.innerText=value["content"]
    
})
}
quote();
setInterval(()=>{
    quote();
}, 7000)