import React from 'react'
import './index.css'

const EventItem = ({ eventDetails, updateActiveEventId, isActiveEvent }) => {
    const { 
        id,
        imageUrl,
        name,
        location } = eventDetails

    const onClickHandler = () => updateActiveEventId(id)

    return (
        <li className='event-item-container'>
            <button className='event-button' onClick={onClickHandler}>
                <img src={imageUrl} alt="event" className={`event-image  ${isActiveEvent ? 'active-event' : ''}`} />
            </button>
            <p className='event-name'>{name}</p>
            <p className='event-location'>{location}</p>
        </li>
    )
}

export default EventItem