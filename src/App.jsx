import react from 'react';

// importing images
import visionprologo from './assets/images/apple_vision_pro_logo__ux94yix23r6y_large.png';
import intrologo from './assets/images/logo__4zgkuyebgtem_large.png';
import applevisionimage from './assets/images/apple_vision_image.png';
import lightsealimg from './assets/images/light_seal__fo87cv0zkcmm_large.jpg';
import eyetrackingoff from './assets/images/eye_tracking_off__fx6m2dj3mlqq_large.jpg';
import eyetrackingon from './assets/images/eye_tracking_on__ln11reqs6mi6_large.jpg';
import sensorsoff from './assets/images/sensors_off__cfzcmow4c3f6_large.jpg';
import sensorsall from './assets/images/sensors_all__dp0a8e4y4u4i_large.jpg';
import sensorschips from './assets/images/sensors_chips__s805s5o3gkii_medium.jpg';

// importing videos
import herovideo from './assets/videos/hero_large_2x.mp4';
import spatialcomputingvideo from './assets/videos/foundation-spatial-computing_large.mp4';
import digitalcanvasvideo from './assets/videos/foundation-digital-canvas_large.mp4';
import visionosvideo from './assets/videos/visionos_large.mp4';
import glassvideo from './assets/videos/glass_large_2x.mp4';
import spatialaudiovideo from './assets/videos/spatial-audio_large.mp4';

const App = () => {
  return (
    <div id="main">
      <div id="page">
        <video src={herovideo} muted />
        <nav>
          <h3>vision pro</h3>
          <button>notify me</button>
        </nav>
        <div id="page-bottom">
          <h3>introduction</h3>
          <img src={visionprologo} alt="" />
        </div>
      </div>
      <div id="page1">
        <h1>welcome to the era of spatial computing</h1>
        <video src={spatialcomputingvideo} autoplay loop muted />
      </div>
      <div id="page2">
        <h1>
          apple vision pro seamlessly blends <br /> digital content with your physical space.
        </h1>
        <video src={digitalcanvasvideo} autoplay loop muted />
      </div>
      <div id="page3">
        <div id="page3-upper">
          <img src={intrologo} alt="" />
          <div id="page3-upper-inner">
            <h3>watch the film</h3>
            <h3>watch the event &gt;</h3>
          </div>
        </div>
        <img src={applevisionimage} alt="" />
        <button> + take a closer look at vision pro</button>
      </div>
      <div id="page4">
        <div id="center-page4">
          <h5>apps</h5>
          <h1>
            free your desktop.
            <br />
            and your apps will follow.
          </h1>
        </div>
        <video src={visionosvideo} autoplay loop muted />
      </div>
      <div id="page5">
        <div classname="left5">
          <h1>
            your apps live in <br /> your space.
          </h1>
        </div>
        <div classname="right5">
          <h3>
            with vision pro, you have an infinite canvas that transforms how you use the apps you love. arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. browse the web in safari, create a to-do list in notes, chat in messages, and seamlessly move between them with a glance.
          </h3>
          <button> + learn more about apps</button>
        </div>
      </div>
      <div id="page6">
        <h3>design</h3>
        <h1>designed by apple.</h1>
        <p>
          apple vision pro is the result of decades of experience designing high‑performance, mobile, and wearable devices — culminating in the most ambitious product apple has ever created. vision pro integrates incredibly advanced technology into an elegant, compact form, resulting in an amazing experience every time you put it on. enclosure. a singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face. light seal. the light seal
        </p>
      </div>
      <div id="page7">
        <canvas />
      </div>
      <div id="page8">
        <h1>
          <span>enclosure</span> a singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.
        </h1>
      </div>
      <div id="page9">
        <h1>
          <span>light seal.</span> the light seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light.
        </h1>
      </div>
      <div id="page10">
        <h1>
          <span> head band. </span>the head band provides cushioning, breathability, and stretch. the fit dial lets you adjust vision pro precisely to your head.
        </h1>
      </div>
      <div id="page11">
        <h1>
          <span> power. </span>the external battery supports up to 2 hours of use, and all‑day use when plugged in.1
        </h1>
      </div>
      <div id="page12">
        <h1>
          <span>sound. </span>speakers positioned close to your ears deliver rich spatial audio while keeping you aware of your surroundings.
        </h1>
      </div>
      <div id="page13">
        <h1>
          <span>eyesight.</span> an outward display reveals your eyes while wearing vision pro, letting others know when you are using apps or fully immersed.
        </h1>
      </div>
      <div id="page14">
        <div classname="left14" />
        <div classname="right14" />
      </div>
      <div id="page15">
        <div id="center-page15">
          <video src={glassvideo} autoplay loop muted />
        </div>
      </div>
      <div id="page16">
        <h2>
          a singular piece of{" "}
          <span>three-dimensionally formed laminated glass</span> acts as an optical surface for the cameras and sensors that view the world. it flows seamlessly into a custom aluminum alloy frame that gently curves to wrap around your face while serving as an attachment point for the{" "}
          <span>light seal.</span>
        </h2>
        <img src={lightsealimg} alt="" />
        <button>+ learn more about design</button>
      </div>
      <div id="page17">
        <h4>technology</h4>
        <h1>
          innovation you can <br /> see, hear, and feel.
        </h1>
        <p>
          <span>pushing boundaries from the inside out.</span> spatial experiences on vision pro are only possible through groundbreaking apple technology. displays the size of a postage stamp that deliver more pixels than a 4k tv to each eye. incredible advances in spatial audio. a revolutionary dual‑chip design featuring custom apple silicon. a sophisticated array of cameras and sensors. all the elements work together to create an unprecedented experience you have to see to believe.
        </p>
      </div>
      <div id="page18">
        <canvas />
      </div>
      <div id="page19">
        <h1>more pixels than a 4k tv. for each eye.</h1>
        <h5>
          the custom micro‑oled display system features 23 million pixels, delivering stunning resolution and colors. and a specially designed three‑element lens creates the feeling of a display that’s everywhere you look.
        </h5>
      </div>
      <div id="page20">
        <video src={spatialaudiovideo} autoplay loop muted />
        <div id="center-page20">
          <h1>
            our most advanced <br /> spatial audio system ever.
          </h1>
          <p>
            dual-driver audio pods positioned next to each ear deliver personalized sound while letting you hear what’s around you. ambient spatial audio makes sounds feel like they’re coming from your surroundings. and with audio raytracing, vision pro analyzes your room’s acoustic properties — including the physical materials — to adapt and match sound to your space.
          </p>
        </div>
      </div>
      <div id="page21">
        <img id="troff" src={eyetrackingoff} alt="" />
        <img id="tron" src={eyetrackingon} alt="" />
      </div>
      <div id="page22">
        <img id="snroff" src={sensorsoff} alt="" />
        <img id="snron" src={sensorsall} alt="" />
      </div>
      <div id="page23">
        <img src={sensorschips} alt="" />
      </div>
    </div>
  );
};

export default App;