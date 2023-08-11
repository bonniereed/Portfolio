import React, { useState } from 'react';
import {
Card
} from 'reactstrap';

const items = [
  {
    src:  'src/img/marketplace.png',
    altText: 'Marketplace Extension',
    caption: 'Marketplace Extension',
    description:'This project gives a user quick access to their listings',
    repo:'https://github.com/bonniereed/MarketplaceExtension',
    key: 1,
  },
  {
    src: 'src/img/mordle.jpeg',
    altText: 'Wordle Clone',
    caption: 'Wordle Clone',
    repo:'https://github.com/bonniereed/Mordle',
    description: 'This project was a fun game to recreate with two different APIs',
    key: 2,
  },
];

function Projects(args) {

  const cards = items.map((item) => {

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    key={item.src}
  />
  <CardBody>
    <CardTitle tag="h5">
    {item.caption}
    </CardTitle>
    <Button>
      {item.repo}
    </Button>
  </CardBody>
</Card>
});
}
  
  export default Projects;