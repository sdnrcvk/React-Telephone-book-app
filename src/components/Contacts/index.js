import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import './styles.css'

function Contacts() {
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
        console.log(contacts);

    },[contacts])

  return (
    <div id='container'>
        <h2>Telefon Rehberi</h2>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts