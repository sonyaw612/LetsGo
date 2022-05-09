import React from 'react';
import { Redirect } from 'react-router-dom';

class EventCard extends React.Component {
    state = {
        eventPage: false,
        redirectLink: "/event/?id="+this.props.card.id
    };

    render(){
        return(
            <div>
                <h3></h3>
            </div>
        );
    }

}

export default EventCard;