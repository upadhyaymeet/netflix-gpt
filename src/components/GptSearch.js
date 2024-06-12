import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="bg-img"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestion />1
    </div>
  )
}

export default GptSearch