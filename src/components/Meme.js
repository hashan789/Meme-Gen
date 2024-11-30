import React, { useEffect, useState } from 'react'
import { Button, FormControl, Image, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Style.css'

export default function Meme() {

   const [meme,setMeme] = useState([])
   const [memeIndex, setMemeIndex] = useState(0)
   const [captions, setCaptions] = useState([])
   const history = useNavigate()

  function updateCaption(e,index){
   const text = e.target.value || ' '
    setCaptions(
        captions.map((caption,i) => {
          if(index === i){
              return text
          }
          else{
              return caption
          }
        })
    )
}

        function generateMeme(){
            const currentMeme = meme[memeIndex]
            const formData = new FormData()

            formData.append('username','HashanMalinda')
            formData.append('password','hsD#69@A')
            formData.append('template_id',currentMeme.id)
            captions.forEach((caption,index) => formData.append(`boxes[${index}][text]`,caption))

            fetch('https://api.imgflip.com/caption_image',{
                method: 'POST',
                body: formData
            }).then(res => {
                res.json().then(res => {
                   history(`./newmeme?url=${res.data.url}`)
                })
            })
        }

   function shuffleMemes(array){
    for(let i = array.length -1;i>0;i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
 }

   useEffect(() => {
      fetch('https://api.imgflip.com/get_memes').then(res => {
          res.json().then(res => {
              const memes = res.data.memes
              setMeme(memes)
              shuffleMemes(memes)
          })
      })   
    },[])

    useEffect(() => {
        if(meme.length){
            setCaptions(Array(meme[memeIndex].box_count).fill(''))
        }
    },[memeIndex, meme])

    useEffect(() => {
       console.log(captions)
    },[captions])

    function back(){
        setMemeIndex(memeIndex - 1)
    }

    function forward(){
        setMemeIndex(memeIndex + 1)
    }

    return (
      <div>
         { meme.length ? 
           <div>
               <div className="center-meme skip" style={{marginTop:'50px'}}>
                 <Button onClick={memeIndex ? back : ''} style={{display:'block'}}>Back</Button>
                 <Button onClick={forward} style={{display:'block', marginLeft:'20px'}}>Forward</Button>
              </div>
              {
                  captions.map((caption,index) => (
                      <InputGroup>
                        <FormControl key={index} onChange={(e) => updateCaption(e,index)} className="skip input-width" placeholder="Enter the values" />
                      </InputGroup>
                  ))
              }
              <Image style={{width:'200px'}} src={meme[memeIndex].url} fluid/>
              <div className="center-meme skip">
                 <Button onClick={generateMeme} style={{display:'block'}}>Generate</Button>
              </div>
           </div>
            : '' 
         }
      </div>
    )
}
