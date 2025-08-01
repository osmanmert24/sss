import React from 'react'
import Products from "./Products"
import { useParams } from 'react-router';
import Slider from './components/Slider';

export default function Home() {

 
 
  return (
    <div className='container mx-auto px-4 py-8'>
      <Slider />
    </div>
  )
}