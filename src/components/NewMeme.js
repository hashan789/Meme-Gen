import React from 'react'
import { saveAs } from 'file-saver'
import { Button, Image } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import './Style.css'

export default function NewMeme() {

    const history = useNavigate()
    const location = useLocation()
    const url = new URLSearchParams(location.search).get('url')

    function goHomepage(){
        history('/')
    }

    function downloadImage(){
        saveAs(url,'image.jpg')
    }

    return (
        <div>
        <div style={{marginTop:'100px'}}>
           { url && <Image src={url} style={{width:'200px'}} /> } 
        </div>
        <div className="center-meme" style={{marginTop:'30px'}}>
            <Button onClick={goHomepage}>Make more memes</Button>
            <Button onClick={downloadImage} style={{marginLeft:'30px'}}>Download new meme</Button>
        </div>
        </div>
    )
}
