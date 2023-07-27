import TobbyInfo from '@/components/Info';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title> Emmannuel Abiodun || Home</title>
      </Head>
      <header className="header" style={{overflow: "hidden"}}>
        <div className='wrapper'>
          <h2>
          {' '}
          <span className="hello">Hello! </span>
         <span className='duty'>I&apos;m Emmanuel, <br/>Glad to Have You</span> 
        </h2>
        <div className='teex'>
          <TobbyInfo />
        </div>
        </div>
        
      </header>
    </>
  );
}
