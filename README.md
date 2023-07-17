<h1>Inspirational Quote Generator<h1>

1. fetch random quotes
const axios = require('axios')
const { log } = require('console')

axios.get('https://zenquotes.io/api/quotes')
     .then((data) => console.log(data, 'testing'))
     .catch((err) => console.log(err))


2. Turn text of quotes into lines(quote text re)
3. Turn text of Author into a line
4. Add a quote image
5. Turn elements into svg
6. Turn svg into an image(base64 in lambda)

Package:
- npm i sharp --> images processing
- npm i node-fetch@2.6.9

const sharp = require('sharp')
const url = 'https://zenquotes.io/api/random'
const fetch = require('node-fetch')

//1//fetch random quotes
//2// Turn text of quotes into lines(quote text re)
//3// Turn text of Author into a line
//4// Add a quote image
//5// Turn elements into svg
//6 // Turn svg into an image(base64 in lambda)

async function getRandomQuotes(apiUrl) {
  let quoteText, quoteAuthor;

  const res = await fetch(apiUrl)
  const data = await res.json()
  

  // quote elements
  quoteText = data[0].q
  quoteAuthor = data[0].a

  // image constraction
  const width = 750;
  const height = 483;
  const text = quoteText;
  const words = quoteText.split(' ')
  const lineBrack = 4;
  let newText = '';

  // Define some tspanElements with 4 words each
  let tspanElements = ''
  for(let i = 0; i < words.length; i++) {
    newText += words[i] + ' '
    if((i + 1) % lineBrack === 0) {
      tspanElements += `<tspan x='${width / 2}' dy="1.2em">${newText}</tspan>`;
      newText = "";
    }
  }
  if(newText !== "") {
    tspanElements += `<tspan x='${width / 2}' dy="1.2em">${newText}</tspan>`;
  }


  // Construct the svg

  const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
       .title { 
          fill: #ffffff; 
          font-size: 20px; 
          font-weight: bold;
        }
        .quoteAuthorStyles {
           font-size: 35px;
           font-weight: bold;
           padding: 50px;
        }
        .footerStyles {
          font-size: 20px;
          font-weight: bold;
          fill: lightgrey;
          text-anchor: middle;
          font-family: Verdana;
        }
     </style>
     <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)"/>
      <text 
        x="382" 
        y="76" 
        dy="50" 
        text-anchor="middle" 
        font-size="90" 
        font-family="Verdana" 
        fill="white">
      </text>
        <g>
          <rect x="0" y="0" width="${width}" height="auto"></rect>
          <text 
            id="lastLineOfQuote" 
            x="375" 
            y="120" 
            font-family="Verdana" 
            font-size="35" 
            fill="white" 
            text-anchor="middle"
          >
            ${tspanElements}
            <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>
          </text>
        </g>
        <text x="${width / 2}" y="${height - 10}" class="footerStyles">Developed by @BrianHHough | Quotes from ZenQuotes.io</text>
    </svg>
  `

  // Add background images 

  const backgrounds = [
    "backgrounds/coolBlues.jpg",
    "backgrounds/darkOcean.jpg",
    "backgrounds/eXpresso.jpg",
    "backgrounds/jShine.jpg",
  ]

  // Choose random image

  const randomIndex = Math.floor(Math.random() * backgrounds.length)
  const selectedBackgroundImages = backgrounds[randomIndex]

  // Composite this image together
  const timeStamp = new Date().toLocaleString().replace(/[^\d]/g, "")
  //const imagePath = path.join('/tmp', `quote-card-${timeStamp}.png`);
  const svgBuffer = Buffer.from(svgImage)

  const image = await sharp(selectedBackgroundImages).composite([
    {
      input: svgBuffer,
      top: 0,
      left: 0,
    },
  ])
   .toFile(`finals/quote-card-${timeStamp}.png`);
}


getRandomQuotes(url)
