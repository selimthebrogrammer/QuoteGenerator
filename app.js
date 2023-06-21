const quote = document.getElementById('quote');
const writer = document.getElementById('writer');
const btn = document.getElementById('getQuote');
const url = 'https://api.quotable.io/random';

btn.addEventListener('click', () => {
         
         fetch(url)
         .then(data => data.json())
         .then(item => {
                  writer.textContent = `-- ${item.author}`;
                  quote.textContent = item.content;
                  
         })

})
