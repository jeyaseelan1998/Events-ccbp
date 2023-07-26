import React from 'react'
import './index.css'

const registrationStatuses = {
  intitial: 'INITIAL',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER'
}

const ActiveEventRegistrationDetails = (props) => {
  const { registrationStatus } = props;

  const renderNoActiveEventView = () => (
    <div className='active-event-registration-details-container'>
      <p className='no-active-event-veiw-text'>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className='active-event-registration-details-container'>
      <div className='view-container'>
        <img src='https://assets.ccbp.in/frontend/react-js/events-register-img.png' alt='yet to register' className='not-registered-image' />
        <p className='not-rgistered-para'>
          A live performance brings so much to your
          relationship with dance. Seeing dance live
          can often make you fall totally in love with
          this beautiful art form.
        </p>
        <button className='register-here-btn'>Register here</button>
      </div>
    </div>
  )

  const renderRegisteredView = () => (
    <div className='active-event-registration-details-container'>
      <div className='view-container'>
        <img src='https://assets.ccbp.in/frontend/react-js/events-regestered-img.png' alt='registered' className='registered-image' />
        <p className='registered-para'>
          You have already registered for
          the event
        </p>
      </div>
    </div>
  )

  const renderRegisterationClosedView = () => (
    <div className='view-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png' alt='registrations closed' className='registered-image' />
      <h1>
        Registrations Are Closed Now!
      </h1>
      <p className='registered-para'>
        Stay tuned. We will reopen
        the registrations soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatuses.yetToRegister:
      return renderYetToRegisterView()
    case registrationStatuses.registered:
      return renderRegisteredView()
    case registrationStatuses.registrationClosed:
      return renderRegisterationClosedView()
    default:
      return renderNoActiveEventView()
  }
}

ActiveEventRegistrationDetails.defaultProps = {
  registrationStatus: registrationStatuses.intitial
}

export default ActiveEventRegistrationDetails