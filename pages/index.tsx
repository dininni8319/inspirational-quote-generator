import Head from 'next/head'

//Components
import { GradientBackgroundCon, BackgroundImage1 } from '@/components/QuoteGenerator/QuoteGeneratorElements'

//Assets
import Cloud2 from '../assets/cloudy-weather.png'
import Cloud1 from '../assets/cloud-and-thunder.png'

export default function Home() {
  return (
    <>
    {/* module that allows us to create dynamic header */}
      <Head>  
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Backgroud */}
      <GradientBackgroundCon>
        
        <BackgroundImage1 
          src={Cloud1}
          height="300"
          alt='Cloudy background'
        />
      </GradientBackgroundCon>
    </>
  )
}
