import { useState } from 'react'
import Items from './components/Items'
import imagee1 from './images/image1.png'
import imagee2 from './images/image2.png'
import imagee3 from './images/image3.png'
import Cards from './components/Cards'
import { cardss } from './components/CardsArray'
import { item } from './components/ItemsArray'
import TabPage from './components/tabfolder/TabPage'



function App() {


  return (
    <>
      <div>
      {item.map(item => (
        <Items image={item.image} title={item.title} description={item.description} />
      ))}
    </div>
    <div>
    {cardss.map(cardss => (
        <Cards version={cardss.version} image={cardss.cardImage} name={cardss.name} description={cardss.cardDescription} color={cardss.color} />
      ))}
    </div>
    <div>
      <TabPage/>
    </div>
    </>
    
  )
}

export default App
