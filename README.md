# react-multi-level-star-rating-component

> react-multi-level-star-rating-component

[![NPM](https://img.shields.io/npm/v/multi-level-star-rating-component.svg)](https://www.npmjs.com/package/multi-level-star-rating-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-multi-level-star-rating-component
```

## Usage

```jsx
import React, { Component } from 'react'

import { MultiLevelStarRating } from 'multi-level-star-rating-component'
import 'multi-level-star-rating-component/dist/index.css'

const Example = () => {
  return <MultiLevelStarRating topics={topics} />
}
```

## Example Prop

topics = [
{
title: 'Title 1',
editable: false, //true for editing star
rating: 3.5, //average of items star rating
key: '0',
items: [
{
title: 'Item 1',
rating: 4
},
{
title: 'Item 2',
rating: 3
}
]
},
{
title: 'Title 2',
editable: false, //true for editing star
rating: 3.5, //average of items star rating
key: '0',
items: [
{
title: 'Item 1',
rating: 4
},
{
title: 'Item 2',
rating: 3
}
]
}
]

## License

MIT © [sri2307](https://github.com/sri2307)

## Credits

This Package is created by using React Bootstrap and React-Star-Rating-Component
