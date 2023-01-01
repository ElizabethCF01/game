import React, {useState, useEffect} from "react";

const Frame =()=>{
    const handleWalk = () =>{
        setJumping(true)
    }
    const [ground, setGround] = useState('__.____🌲___.....___._.____..__.🌲__..._.._..._.._.._____.__.... _.____..._🌲_....__...____.....__.._.._.._..._.._..._.._.🌷____.__..')
    const [ground1, setGround1] = useState('.___._.____..__.____..._..._.....__.._..___._________..._.._..._.._..._.._.._____.__......_.._.._____.__.... _.____...___....__...____')
    const [ground2, setGround2] = useState('_... _.__._.._____.___...___...._.____..__.____...._.._..._...__.._...____...___.__.._..._.._..._.._.._________.....___.__..____.__...')
    const [jump, setJump]= useState(false)
    const [jumping, setJumping]= useState(false)
    const [life, setLifePoints]= useState(0)
    const [stop, setStop] = useState(true)
    const [text, setText] = useState("Lest's play with totoro")

    const handleStart = () => {
        setStop(false)
        setText("Lest's play with totoro")
        setLifePoints(3)
    }

    useEffect(() => {
        if(!stop){
            let l = ground.length-1
            const id = setInterval(() => {
                
                    let current = ground.substring(l, l+1) + ground.substring(0, l)
                    let current1 = ground1.substring(l, l+1) + ground1.substring(0, l)
                    let current2 = ground2.substring(l, l+1) + ground2.substring(0, l)
                    //window.status = string_actual
                    setGround(current)
                    setGround1(current1)
                    setGround2(current2)

            }, 100)

            if(ground.substring(l/2 -2, l/2) === '🌲'){
                setJump(true)
                console.log("jump")
                if(!jumping){
                    setLifePoints(l=>l-1)
                }
                const id = setTimeout(() => {
                    setJump(false)
                }, 800)
                
            }
            if(life === 0){
                setStop(true);
                setText("Oh no you lose 😭")
            }

            return () => {
                    clearInterval(id) 
            }
        }
       
        
    },[ ground, ground1, ground2, stop])

    useEffect(() => {
        let id
        if(jumping){
         id = setTimeout(() => {
                setJumping(false)
            }, 800)
        }
        
        return () => 
            clearTimeout(id)
        
      },[jumping])
    
    return(
        <>
        {(life > 0 && !stop) &&
        <>
        <p>{life}❤️</p>
         <div className="frame">
        <img className="bicho" style={{paddingBottom: jumping? 30: 0 + 'em'}} src={jumping?"https://elizabethcf01.github.io/game/assets/stop.png":"https://elizabethcf01.github.io/game/assets/img.gif"} alt="img"/>
        <p className="ground">{ground}</p>
        <p className="ground1">{ground1}</p>
        <p className="ground2">{ground2}</p>
        <button onClick={handleWalk}>^</button>
        </div>
        </>
        }
        {(life === 0 && stop) &&
        <div className="frame">
        <h1 className="lose">{text}</h1>
        <img  className="img_start" src="https://elizabethcf01.github.io/game/assets/totoro.png" alt="img"/>
        <button onClick={handleStart}>Start</button>
        </div>
        }
        </>
    )
}
export default Frame