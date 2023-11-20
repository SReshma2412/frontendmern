import {Link} from "react-router-dom";
import React, { useState} from "react";

import useSound from "use-sound";

import song from "../audios/29.mp3";
import a from "../audios/a.mp3";
import b from "../audios/b.mp3";
import c from "../audios/c.mp3";
import d from "../audios/d.mp3";
import e from "../audios/e.mp3";
import f from "../audios/f.mp3";
import g from "../audios/g.mp3";
import h from "../audios/h.mp3";
import i from "../audios/i.mp3";
import j from "../audios/j.mp3";
import k from "../audios/k.mp3";
import l from "../audios/l.mp3";
import m from "../audios/m.mp3";
import n from "../audios/n.mp3";
import o from "../audios/o.mp3";
import p from "../audios/p.mp3";
import q from "../audios/q.mp3";
import r from "../audios/r.mp3";
import s from "../audios/s.mp3";
import t from "../audios/t.mp3";
import u from "../audios/u.mp3";
import v from "../audios/v.mp3";
import w from "../audios/w.mp3";
import x from "../audios/x.mp3";
import y from "../audios/y.mp3";
import z from "../audios/z.mp3";


const FrenchLesson=()=>
{
   
    // const [playA, { stopA }] = useSound(a);

    const [hoverAudio1, setHoverAudio1] = useState(false);
    const [hoverAudio2, setHoverAudio2] = useState(false);
    const [hoverAudio3, setHoverAudio3] = useState(false);
    const [hoverAudio4, setHoverAudio4] = useState(false);
    const [hoverAudio5, setHoverAudio5] = useState(false);
    const [hoverAudio6, setHoverAudio6] = useState(false);
    const [hoverAudio7, setHoverAudio7] = useState(false);
    const [hoverAudio8, setHoverAudio8] = useState(false);
    const [hoverAudio9, setHoverAudio9] = useState(false);
    const [hoverAudio10, setHoverAudio10] = useState(false);
    const [hoverAudio11, setHoverAudio11] = useState(false);
    const [hoverAudio12, setHoverAudio12] = useState(false);
    const [hoverAudio13, setHoverAudio13] = useState(false);
    const [hoverAudio14, setHoverAudio14] = useState(false);
    const [hoverAudio15, setHoverAudio15] = useState(false);
    const [hoverAudio16, setHoverAudio16] = useState(false);
    const [hoverAudio17, setHoverAudio17] = useState(false);
    const [hoverAudio18, setHoverAudio18] = useState(false);
    const [hoverAudio19, setHoverAudio19] = useState(false);
    const [hoverAudio20, setHoverAudio20] = useState(false);
    const [hoverAudio21, setHoverAudio21] = useState(false);
    const [hoverAudio22, setHoverAudio22] = useState(false);
    const [hoverAudio23, setHoverAudio23] = useState(false);
    const [hoverAudio24, setHoverAudio24] = useState(false);
    const [hoverAudio25, setHoverAudio25] = useState(false);
    const [hoverAudio26, setHoverAudio26] = useState(false);

    const [playAudio1, { stop: stopAudio1 }] = useSound(a, {
        volume: 0.5,
      });
      
      const [playAudio2, { stop: stopAudio2 }] = useSound(b, {
        volume: 0.5,
      });


      const [playAudio3, { stop: stopAudio3 }] = useSound(c, {
        volume: 0.5,
      });
      
      const [playAudio4, { stop: stopAudio4 }] = useSound(d, {
        volume: 0.5,
      });

      const [playAudio5, { stop: stopAudio5 }] = useSound(e, {
        volume: 0.5,
      });
      
      const [playAudio6, { stop: stopAudio6 }] = useSound(f, {
        volume: 0.5,
      });

      const [playAudio7, { stop: stopAudio7 }] = useSound(g, {
        volume: 0.5,
      });
      
      const [playAudio8, { stop: stopAudio8 }] = useSound(h, {
        volume: 0.5,
      });

      const [playAudio9, { stop: stopAudio9 }] = useSound(i, {
        volume: 0.5,
      });
      
      const [playAudio10, { stop: stopAudio10 }] = useSound(j, {
        volume: 0.5,
      });

      const [playAudio11, { stop: stopAudio11 }] = useSound(k, {
        volume: 0.5,
      });
      
      const [playAudio12, { stop: stopAudio12 }] = useSound(l, {
        volume: 0.5,
      });

      const [playAudio13, { stop: stopAudio13 }] = useSound(m, {
        volume: 0.5,
      });
      
      const [playAudio14, { stop: stopAudio14 }] = useSound(n, {
        volume: 0.5,
      });

      const [playAudio15, { stop: stopAudio15 }] = useSound(o, {
        volume: 0.5,
      });
      
      const [playAudio16, { stop: stopAudio16 }] = useSound(p, {
        volume: 0.5,
      });

      const [playAudio17, { stop: stopAudio17 }] = useSound(q, {
        volume: 0.5,
      });
      
      const [playAudio18, { stop: stopAudio18 }] = useSound(r, {
        volume: 0.5,
      });

      const [playAudio19, { stop: stopAudio19 }] = useSound(s, {
        volume: 0.5,
      });
      
      const [playAudio20, { stop: stopAudio20 }] = useSound(t, {
        volume: 0.5,
      });

      const [playAudio21, { stop: stopAudio21 }] = useSound(u, {
        volume: 0.5,
      });
      
      const [playAudio22, { stop: stopAudio22 }] = useSound(v, {
        volume: 0.5,
      });

      const [playAudio23, { stop: stopAudio23 }] = useSound(w, {
        volume: 0.5,
      });
      
      const [playAudio24, { stop: stopAudio24 }] = useSound(x, {
        volume: 0.5,
      });

      const [playAudio25, { stop: stopAudio25 }] = useSound(y, {
        volume: 0.5,
      });
      
      const [playAudio26, { stop: stopAudio26 }] = useSound(z, {
        volume: 0.5,
      });

      const [playSound] = useSound(song);

        return(

            <div class=" text-lead">
              <nav className="navbar bg-info">
                  <Link to="/" className="navbar-brand mx-3">Language Learning</Link>
             <div className="nav">
                  <Link to="/french" className="nav-link">Logout</Link>
            </div>
            </nav>
                <br />
                 <h1 class="text-center">Lesson1 </h1>

                <br/>
                 <center>

                 <button type="button" class="btn btn-outline-primary" onClick={playSound}>Click here to Listen the Alphabets Song</button>
                 </center>
                 <br/>
                
    
                 <table class="table table-bordered text-center table-striped table-primary border-primary table-hover">
    
    
                    <thead class="text-uppercase fw-bold">
                    <tr>
                        <th>Letter</th>
                        <th>Symbole</th> 
                        
                    </tr>
    
    
                    </thead>
    
                    <tbody>
                        {/* <tr onMouseEnter={() => playA()} onMouseLeave={() => stopA()}>
                            <td>A</td>
                            <td>[a]</td>
                            <td><button onMouseEnter={() => playA()} onMouseLeave={() => stopA()} >play</button></td>
                        </tr> */}




                      <tr onMouseEnter={() => {
                            setHoverAudio1(true);
                            playAudio1();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio1(false);
                          stopAudio1();
                          }}>
                            <td>A</td>
                            <td>[a]</td>
                            
                        </tr>

                        <tr onMouseEnter={() => {
                            setHoverAudio2(true);
                            playAudio2();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio2(false);
                          stopAudio2();
                          }}>
                            <td>B</td>
                            <td>[be]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio3(true);
                            playAudio3();
                            }}
                          onMouseLeave={() => {
                          setHoverAudio3(false);
                          stopAudio3();
                          }}>
                            <td>C</td>
                            <td>[se]</td>
                            
                        </tr>

                        <tr onMouseEnter={() => {
                            setHoverAudio4(true);
                            playAudio4();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio4(false);
                          stopAudio4();
                          }}>
                            <td>D</td>
                            <td>[de]</td>
                            
                        </tr>

                        <tr onMouseEnter={() => {
                            setHoverAudio5(true);
                            playAudio5();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio5(false);
                          stopAudio5();
                          }}>
                            <td>E</td>
                            <td>[ə]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio6(true);
                            playAudio6();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio6(false);
                          stopAudio6();
                          }}>
                            <td>F</td>
                            <td>[ɛf]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio7(true);
                            playAudio7();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio7(false);
                          stopAudio7();
                          }}>
                            <td>G</td>
                            <td>[ʒe]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio8(true);
                            playAudio8();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio8(false);
                          stopAudio8();
                          }}>
                            <td>H</td>
                            <td>[aʃ]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio9(true);
                            playAudio9();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio9(false);
                          stopAudio9();
                          }}>
                            <td>I</td>
                            <td>[i]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio10(true);
                            playAudio10();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio10(false);
                          stopAudio10();
                          }}>
                            <td>J</td>
                            <td>[ʒi]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio11(true);
                            playAudio11();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio11(false);
                          stopAudio11();
                          }}>
                            <td>K</td>
                            <td>[ka]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio12(true);
                            playAudio12();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio12(false);
                          stopAudio12();
                          }}>
                            <td>L</td>
                            <td>[ɛl]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio13(true);
                            playAudio13();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio13(false);
                          stopAudio13();
                          }}>
                            <td>M</td>
                            <td>[ɛm]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio14(true);
                            playAudio14();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio14(false);
                          stopAudio14();
                          }}>
                            <td>N</td>
                            <td>[ɛn]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio15(true);
                            playAudio15();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio15(false);
                          stopAudio15();
                          }}>
                            <td>O</td>
                            <td>[o]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio16(true);
                            playAudio16();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio16(false);
                          stopAudio16();
                          }}>
                            <td>P</td>
                            <td>[pe]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio17(true);
                            playAudio17();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio17(false);
                          stopAudio17();
                          }}>
                            <td>Q</td>
                            <td>[ky]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio18(true);
                            playAudio18();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio18(false);
                          stopAudio18();
                          }}>
                            <td>R</td>
                            <td>[ɛʀ]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio19(true);
                            playAudio19();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio19(false);
                          stopAudio19();
                          }}>
                            <td>S</td>
                            <td>[ɛs]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio20(true);
                            playAudio20();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio20(false);
                          stopAudio20();
                          }}>
                            <td>T</td>
                            <td>[te]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio21(true);
                            playAudio21();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio21(false);
                          stopAudio21();
                          }}>
                            <td>U</td>
                            <td>[y]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio22(true);
                            playAudio22();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio22(false);
                          stopAudio22();
                          }}>
                            <td>V</td>
                            <td>[ve]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio23(true);
                            playAudio23();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio23(false);
                          stopAudio23();
                          }}>
                            <td>W</td>
                            <td>[dubləve]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio24(true);
                            playAudio24();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio24(false);
                          stopAudio24();
                          }}>
                            <td>X</td>
                            <td>[iks]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio25(true);
                            playAudio25();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio25(false);
                          stopAudio25();
                          }}>
                            <td>Y</td>
                            <td>[igʀɛk]</td>
                            
                        </tr>
                        <tr onMouseEnter={() => {
                            setHoverAudio26(true);
                            playAudio26();
                         }}
                          onMouseLeave={() => {
                          setHoverAudio26(false);
                          stopAudio26();
                          }}>
                            <td>Z</td>
                            <td>[zɛd]</td>
                            
                        </tr>


                       
                    </tbody>
                    
    
    
                 </table>
    
            </div>
        )
   

    
}

export default FrenchLesson;