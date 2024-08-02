import { useState } from 'react'
import Items from './components/Items'
import imagee1 from './images/image1.png'
import imagee2 from './images/image2.png'
import imagee3 from './images/image3.png'
import Cards from './components/Cards'
import { cardss } from './components/CardsArray'
import { item } from './components/ItemsArray'
import TabPage from './components/tabfolder/TabPage'
// import Dropdown from './components/Dropdown'



function App() {


  return (
    <>
      <div className='items-container'>
        {item.map(item => (
          <Items image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
      <div className='cards-container'>
        {cardss.map(cardss => (
          <Cards version={cardss.version} image={cardss.cardImage} name={cardss.name} description={cardss.cardDescription} color={cardss.color} />
        ))}
      </div>
      <div className='container-tabss' >
        <TabPage />
      </div>
      {/* <Dropdown/> */}
    </>

  )
}

export default App
