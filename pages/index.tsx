import { useEffect, useState } from 'react';
import Head from 'next/head'

//Components
import {
  GradientBackgroundCon, 
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  RedSpan,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  QuoteGeneratorButton, 
  GenerateQuoteButtonText,
  QuoteGeneratorModal
   } from '@/components/QuoteGenerator/QuoteGeneratorElements'

//Assets
import Cloud2 from '../assets/cloudy-weather.png'
import Cloud1 from '../assets/cloud-and-thunder.png'

export default function Home() {
  const [ numberOfQuotes, setNumbersOfQuotes ] = useState<Number | null>(0)
 
  interface IQuotes {
    q: string,
    a: string,
    h: string,
    c: string
  }
  // useEffect(() => {

  //   const getQuote = async () => {
  //     const res = await fetch('https://zenquotes.io/api/quotes')
  //     const data = await res.json()
  //     const quote: IQuotes = data[0]
  //     console.log(quote)
  //   }
  //   getQuote()
  // }, [])
  return (
    <>
    {/* module that allows us to create dynamic header */}
      <Head>  
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-up*/}

        <QuoteGeneratorModal/>
         <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              <QuoteGeneratorSubTitle>
                Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by
                  <FooterLink 
                    href='https://portafolio-app-ten.vercel.app/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    @SalvatoreDininni
                  </FooterLink>
              </QuoteGeneratorSubTitle>

              <QuoteGeneratorButton onClick={null}> 
                <GenerateQuoteButtonText>
                   Make a Quote
                </GenerateQuoteButtonText>
              </QuoteGeneratorButton>
            </QuoteGeneratorTitle>
            </QuoteGeneratorInnerCon>
         </QuoteGeneratorCon>
          
        {/* Backgroud Images*/}
        <BackgroundImage1 
          src={Cloud1}
          height="300"
          alt='Cloudy background'
        />
        <BackgroundImage2
          src={Cloud2}
          height="300"
          alt='Cloudy background'
        />

        {/* Footer */}
        <FooterCon>
          <>
          Quotes Generated: {numberOfQuotes}
            <br />
            Developesd with <RedSpan>❤️</RedSpan> by <FooterLink 
            href='https://portafolio-app-ten.vercel.app/' 
            target='_blank' 
            rel='noopener noreferrer'>
               @SalvatoreDininni
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  )
}
