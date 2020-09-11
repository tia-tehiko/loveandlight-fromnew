import React from 'react'
import Candles from './Candles'

const candles = [
  {id: 1, name: 'Carousel Mini', price: 8, img: './images/1.jpg', details: 'Coming Soon...', inCart: false, count: 0, total: 0},
  {id: 2,name: 'Carousel Large',price: 20,img: './images/2.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 3,name: 'Vintage Clear',price: 25,img: './images/1.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},                                                                                                                                                                            
  {id: 4,name: 'Vintage Tiffany Blue',price: 25,img: './images/4.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 5,name: 'Love Jar',price: 25,img: './images/7.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 6,name: 'Geo Large',price: 35,img: './images/4.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 7,name: 'Renee Jar',price: 35,img: './images/2.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 8,name: 'Renee Mauve',price: 35,img: './images/5.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0},
  {id: 9,name: 'OMG Jar',price: 40,img: './images/2.jpg',details: 'Coming Soon...',inCart: false,count: 0,total: 0}
]


export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <ul>{candles.map(candle => 
          <li key={candle.id}>{candle.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
