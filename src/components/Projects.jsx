import React from 'react'
import Test from './card'
import cards from '../cards.json'

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards
        };
    }
    render() {
        return (
          <>
          {this.state.cards.map(card => (
            <Test
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
            url={card.url}
            summary={card.summary}
            />
          ))}
          </>
        )
    }
}
