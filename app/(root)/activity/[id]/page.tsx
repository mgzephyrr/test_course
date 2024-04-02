import React from 'react'

const activity = ({ params }: { params: { id: string } }) => {
  return (
    <div>activity: #{params.id}</div>
  )
}

export default activity
