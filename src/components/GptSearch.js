import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="-z-10 fixed">
        <img
        className='h-screen object-cover'
          src={BG_URL}
          alt="bg-img"
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />1
    </div>
    </>
    
  )
}

export default GptSearch