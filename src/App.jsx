import { useState } from 'react'

function App() {
  const  pictureIDs=[164,129,24,218,91]
const [imageId, setImageId] = useState(pictureIDs[0])

const getLoremPicsumImg=(id, width=800, height=450)=>`https://picsum.photos/id/${id}/${width}/${height}`

function resmiDegistir(id)
{
  setImageId(id)
}
  return (
  
   <main class="container">
    <hgroup>
      <h2>Mini Görsel Uygulaması</h2>
      <h3>Görsel</h3>
      </hgroup>
      <img 
        style={{width:'100%'}}
        src={getLoremPicsumImg(imageId)} alt="" />
      <div className='grid' style={{marginTop:"30px"}}>
{
  pictureIDs.map((item,index)=>
  <div key={index}> 
  <img  
  onClick={()=>resmiDegistir(item)}
  src={getLoremPicsumImg(item,300,200)} alt={item} />
  </div>
  )
}
      </div>
   </main>
  )
}

export default App
