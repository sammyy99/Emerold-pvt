import React from 'react'

const ContactDetailsCard = ({details}) => {
    const {name,detail,icon} = details
  return (
    <div className='md:p-4 p-2 flex space-x-5 items-center border rounded-md my-4 bg-white md:my-6  shadow-md hover:shadow-gray-600 hover:shadow-lg hover:cursor-pointer'>
      <div>{icon}</div>
      <div>
        <div className='text-lg'>{name}</div>
        <div className='text-gray-700'>{detail}</div>
        </div>
    </div>
  )
}

export default ContactDetailsCard
