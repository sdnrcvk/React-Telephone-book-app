import React from 'react'

function List({contacts}) {
  return (
    <div>
        {contacts.map((contact,i)=>(
            <li key={i}>{contact.fullname}-{contact.phone_number}</li>
        ))}
    </div>
  )
}

export default List