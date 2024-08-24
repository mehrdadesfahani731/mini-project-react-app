

import { useState } from 'react'
import './App.css'

function App() {
const [isShow,setisShow]=useState(true);
const [isid,setisid]=useState();





const content=["content1","content2","content3","content4"];

const discription=["Lorem ipsum dolor sit amet consectetur adipisicing elit",
  " Eum perspiciatis facilis doloremque officia quam omnis fugiat in? Nam id corporis, repellendus ipsum ratione deleniti?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis facilis doloremque officia quam omnis fugiat in? Nam id corporis, repellendus ipsum ratione deleniti? Recusandae voluptate corporis cupiditate inventore enim",
"Eum perspiciatis facilis doloremque officia quam omnis fugiat in? Nam id corporis, repellendus ipsum ratione",
"Eum perspiciatis facilis doloremque officia quam omnis fugiat in? Nam id corporis, repellendus ipsum ratione"
]






      
const showhandeler=(event)=>{
  setisShow(true);
  const id=(event.target.dataset.set)

setisid(id)

}

  return (
    <>


<button onClick={showhandeler}  data-set="0">Tab1</button>
<button onClick={showhandeler} data-set="1">Tab1</button>

<button onClick={showhandeler} data-set="2">Tab1</button>

<button onClick={showhandeler} data-set="3">Tab1</button>
{isShow&&<div><h1>{content[isid]}</h1>
<p>{discription[isid]}</p>

</div>}
    </>
  )
}

export default App

 
  


   





