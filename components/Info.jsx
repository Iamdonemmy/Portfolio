import { useEffect, useRef } from 'react';
import Link from 'next/link';

const EmmyInfo = () => {
  const linkRef = useRef(null);

  useEffect(() => {
    linkRef.current.focus();
  }, []);
  return(
  <main>
    <div className="text">
      <p>
        I&apos;m a highly skilled full-stack developer With
        expertise in building exceptional websites. You can connect with me via.
      </p>
      <ul>
        <li>
          <Link href="https://github.com/Iamdonemmy">
            <i className="fa-brands fa-github" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/emmanuel-seun-abiodun-32829920b">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/iamDONEMMy01?t=0QtxTwuro3BE_gwm2ZWaFg&s=09">
            <i className="fa-brands fa-twitter" />
          </Link>
        </li>
      </ul>
    </div>
    <div className="link">
      <Link ref={linkRef} href="/projects" autoFocus={true}> My Projects</Link>
      <Link href="/EmmyResume.pdf"> My Resume</Link>
    </div>
  </main>
  )
  };

export default EmmyInfo;
