//my version

const BASE_URL = 'https://api.quotable.io/random'


async function getRandomId (id) {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();

    const content = document.getElementById('content');
    const author = document.getElementById('author');
    const btn = document.getElementById('btn');


    content.textContent = data.content;
    author.textContent = data.author;

 
    console.log(content.textContent)
    console.log(author.textContent)

    btn.addEventListener('click', getRandomId );
    
    return getRandomId
}

getRandomId()



// // github version

// document.addEventListener("DOMContentLoaded", () => {
//     // DOM elements
//     const button = document.querySelector("button");
//     const quote = document.querySelector("blockquote p");
//     const cite = document.querySelector("blockquote cite");
  
//     async function updateQuote() {
//       // Fetch a random quote from the Quotable API
//       const response = await fetch("https://api.quotable.io/random");
//       const data = await response.json();
//       if (response.ok) {
//         // Update DOM elements
//         quote.textContent = data.content;
//         cite.textContent = data.author;
//       } else {
//         quote.textContent = "An error occured";
//         console.log(data);
//       }
//     }
  
//     // Attach an event listener to the `button`
//     button.addEventListener("click", updateQuote);
  
//     // call updateQuote once when page loads
//     updateQuote();
//   });
  