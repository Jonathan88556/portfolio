'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import foreground from '../public/background2.png'
import background from '../public/background1.png'
import profilePicture from '../public/cvfoto.png'
import project1 from '../public/project1.png'
import project2 from '../public/project2.png'
import project3 from '../public/project3.png'
import project4 from '../public/project4.png'
import './app.css';

const inter = Inter({ subsets: ['latin'] })

let bgSize;
let factorSize;
let pageSize;
if (typeof window !== "undefined") {
if (window.screen.width <= 1450) {
  pageSize = 3
}
else{
  pageSize = 2
}
if (window.screen.width <= 850) {
  bgSize = 'contain';
}
else{
  bgSize = 'cover'
  factorSize = '3'
}
}
function downloadCV(){
  window.open("https://88556.stu.sd-lab.nl/CV_Jonathan_de_Snoo.pdf", "_blank");
}

export default function Home() {
  return (
    <main>
      <Parallax pages={pageSize}>
        <ParallaxLayer
          speed={0.5}
          factor={factorSize}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: `${bgSize}`,
            backgroundPosition: "center",
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={factorSize}
          style={{
            backgroundImage: `url(${foreground.src})`,
            backgroundSize: `${bgSize}`,
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={1.2}>
          <div className="home" id="home-nav">
            <h2>
              <span className="greetings">Hallo, ik ben</span>
              <br></br>
              <span className="firstName">Jonathan</span> de Snoo<br></br>
              <span className="job">&#60;Software Developer/&#62;</span>
            </h2>
          </div>
          <div className="about" id="about-nav">
            <div className="photo">
              <Image
                src={profilePicture}
                alt={"Een foto van mij!"}
                width={320}
                className="profile-picture"
              />
              <hr></hr>
              <h1 id='skills-titel'>Skills</h1>
              HTML: <progress value="100" max="100"></progress><br></br>
              JAVASCRIPT: <progress value="75" max="100"></progress><br></br>
              CSS: <progress value="95" max="100"></progress><br></br>
              PHP: <progress value="75" max="100"></progress><br></br>
              SQL: <progress value="75" max="100"> 32% </progress><br></br>
              C#: <progress value="40" max="100"> 32% </progress>
            </div>
            <div className="about-text">
              <h1 className='about-title'>Over mij</h1>
              Hallo, ik ben Jonathan de Snoo, een 19-jarige student die zich richt op de opleiding Software Development.<br></br> Ik ben trots op mijn hardwerkende aard en de passie die ik heb voor softwareontwikkeling.<br></br> Ik ben vooral geïnteresseerd in back-end coderen, maar front-end vind ik ook leuk. Ik vind het leuk om CRUD-applicaties te maken en heb daar voorbeelden van op de "mijn projecten" pagina. Ik ben sterk in vormgeving en talen zoals HTML, CSS en JavaScript en ook in PHP.<br></br> Ik ben altijd op zoek naar manieren om mijn kennis en vaardigheden uit te breiden en te verbeteren.<br></br> Mensen beschrijven mij als een aardige en betrouwbare jongen met een oprechte instelling.<br></br> Ik ben vastbesloten om het beste te halen uit mijn opleiding en carrière als softwareontwikkelaar.
              <hr></hr>
              Voor meer informatie kunt u mijn cv downloaden<br></br>
              <button className="button-19" onClick={downloadCV}>Download CV</button>
            </div>
          </div>
          <div className='projecten'>
            <h1 className='projecten-title'>Projecten</h1>
            <div className="projecten-container">
            <div className="project">
              <h1 className='project-title'>Villas4U</h1>
              <div className='project-text'>
                Deze website heb ik gemaakt in de zomer van 2022. Dit project is volledig gemaakt met boodstrap en dit is ook de eerste keer dat ik een database heb gebruikt.<p className='project-click'><a href='https://88556.stu.sd-lab.nl/Villas4U/index.html' target={'_blank'}>Klik hier om dit project te bekijken</a></p>
              </div>
              <div className="card">
                <Image
                  src={project1}
                  alt={'Project 1 voorbeeld'}
                  width={350}
                  height={450}
                  style={{
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
            <div className="project">
              <h1 className='project-title'>Weer Applicatie</h1>
              <div className='project-text'>
                Deze web-applicatie heb ik gemaakt in september. Ik ben erg trots op dit project, want dit is de eerste keer dat ik een api heb gebruikt. Ik heb php gebruikt om de api uit te lezen en zoals je kan zien kun je met deze api het weer zien.<p className='project-click'><a href='https://88556.stu.sd-lab.nl/minor/api/opdracht1/opdracht1.php' target={'_blank'}>Klik hier om dit project te bekijken </a></p>
              </div>
              <div className="card">
                <Image
                  src={project2}
                  alt={'Project 2 voorbeeld'}
                  width={350}
                  height={450}
                  style={{
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
            <div className="project">
              <h1 className='project-title'>Boss Fight</h1>
              <div className='project-text'>
                Dit is een boss fight game gemaakt in JavaScript.<p className='project-click'><a href='https://88556.stu.sd-lab.nl/bossfight/index.html' target={'_blank'}>Klik hier om dit project te bekijken</a></p>
              </div>
              <div className="card">
                <Image
                  src={project3}
                  alt={'Project 3 voorbeeld'}
                  width={350}
                  height={450}
                  style={{
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
            <div className="project">
              <h1 className='project-title'>Feit of Fabel</h1>
              <div className='project-text'>
                Dit is mijn meest recente project, deze website heb ik ook samen gemaakt met mijn vriend. Hij heeft de personen pagina gemaakt en ik heb de rest gedaan. De styling is dus ook door mij gedaan. Dit keer heb ik mij nog veder verdiept in relational database. In deze website is het namenlijk veel complexer. Hoe het spel werkt ziet u in de uitleg pagina van deze website.<p className='project-click'><a href='https://88556.stu.sd-lab.nl/beroeps/ken_je_mij/welcome.php' target={'_blank'}>Klik hier dit project te bekijken</a></p>
              </div>
              <div className="card">
                <Image
                  src={project4}
                  alt={'Project 4 voorbeeld'}
                  width={350}
                  height={450}
                  style={{
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
