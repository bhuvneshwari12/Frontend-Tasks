import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const onAddMeetup=(data)=>{
        console.log('new meetup data',data)
    }
  return (
    <div>
    <NewMeetupForm onAddMeetup={onAddMeetup}/>
    </div>
  )
}

export default NewMeetup;
