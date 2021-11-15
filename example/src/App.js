import React from 'react'

import { MultiLevelStarRating } from 'multi-level-star-rating-component'
import 'multi-level-star-rating-component/dist/index.css'
import { topics } from './topics'

const App = () => {
  return <MultiLevelStarRating topics={topics} />
}

export default App
