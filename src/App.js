import { Navbar, Footer, ScrollToTop } from './components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <>
    
      <div class="bg-hero min-h-screen bg-no-repeat bg-center bg-fixed">
        <Navbar />
        <ScrollToTop />

        <main class="mx-4 mt-4 overflow-hidden">
          <FadeIn delay={1000} transitionDuration={2000}>
              <h1 class="text-7xl text-white font-bold mt-80 ml-8">
                Our world is beautiful
              </h1>
              <p class="text-4xl text-white mt-14 ml-10">
                and it is our expression of freedom.
              </p>

              <div class="text-md opacity-50 w-full text-center mt-24">
                <p>
                Scroll for more.
                </p>
                <FaArrowDown class="w-full mt-5 animate-top" />
              </div>

          </FadeIn>
          </main>
      </div>

      {/* <div class="min-h-screen bg-black text-white">
          <Parallax pages={3}>  
                <ParallaxLayer offset={0} />
                  
                <ParallaxLayer offset={1} factor={1} speed={0.5} style={{ fontSize: "4rem", marginTop: "8rem", marginLeft: "4rem", maxWidth: "50%" }}>
                  <ScrollAnimation animateIn="fadeIn">
                    <h1>
                      884 million people don't have access to clean water
                    </h1>
                  </ScrollAnimation>
                </ParallaxLayer>

                <ParallaxLayer offset={2} factor={1} speed={0.5}>
                  <h1>
                      Fact 2 blash blah blah
                  </h1>
                </ParallaxLayer>
            </Parallax>
         </div> */}
         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3}>
              <h1 class="text-7xl font-bold px-4 py-4">
                But we are silencing it.
              </h1>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                On average, 7 million people die due to air pollution every year.
              </h1>

              <p class="px-5 opacity-25">
                Source: World Health Organization
              </p>

              <img class="h-1/2 w-1/2 opacity-60 ml-auto mr-56" src="https://media.discordapp.net/attachments/895398458452746341/970038488714059836/thequint_2022-03_be16aed7-c6ec-4527-855f-4bead86ce44d_Air_Pollution_deaths_delhi_india_who.jpg?width=1872&height=1053" alt="Factories"/>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                And more than a million species face extinction.
              </h1>

              <p class="px-5 opacity-25">
                Source: EARTHDAY.ORG
              </p>

              <img class="h-1/2 w-1/2 opacity-60 ml-auto mr-56" src="https://cdn.discordapp.com/attachments/895398458452746341/970040620808802324/unknown.png" alt="Poor little animal :("/>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                And over 100 million marine animal deaths.
              </h1>

              <p class="px-5 opacity-25">
                Source: condorferries.co.uk
              </p>

              <img class="h-1/2 w-1/2 opacity-60 ml-auto mr-56" src="https://media.discordapp.net/attachments/895398458452746341/970041310289477662/unknown.png" alt="Bird covered in oil"/>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                We only have 4 billion hectares of forestry left from our original 6 billion.
              </h1>

              <p class="px-5 opacity-25">
                Source: FAO
              </p>

              <img class="h-1/2 w-1/2 opacity-60 ml-auto mr-56" src="https://media.discordapp.net/attachments/895398458452746341/970039379768803398/unknown.png?width=1582&height=1054" alt="Burning trees"/>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-black text-white p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                Our world is dying.<br /> 
              </h1>

              <img class="w-1/2 mx-auto mt-4 opacity-75 mb-40 " src="https://media.discordapp.net/attachments/895398458452746341/970056521784377374/unknown.png?width=1054&height=1054" alt="Earth" />
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-white text-black p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                But it is not too late.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
                It's time for us to take it personally.
              </h1>
            </ScrollAnimation>
         </div>

         <div class="min-h-screen w-full bg-white text-black p-8 overflow-hidden">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <h1 class="text-7xl font-bold px-4 py-4">
              Preserve and restore our nature to take one step further towards reversing decades of ignorance.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3} style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                <div class="flex justify-between mx-40">
                  <button class="mt-24 text-xl text-white font-bold bg-green-500 rounded-xl px-12 py-4">
                    <a target="_blank" href="https://chicagoenvironment.org/volunteer/index.cfm">
                      Volunteer at our local nature preserve 
                    </a>
                  </button>

                  <button class="mt-24 text-xl text-white font-bold bg-orange-500 rounded-xl px-12 py-4">
                    <a target="_blank" href="https://www.rainforestcoalition.org/donate/">
                      Donate to environmental charities.
                    </a>
                  </button>
                </div>
                
            </ScrollAnimation>
         </div>

         <Footer />
    </>
  );
}

export default App;
