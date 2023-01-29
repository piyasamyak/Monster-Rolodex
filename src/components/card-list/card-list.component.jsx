import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    return (
                        <Card monster={monster} alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;