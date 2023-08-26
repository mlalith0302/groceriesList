import React from 'react'

const Footer = ({ length }) => {
  return (
    <footer>
        {length? (length===1 ? (<h3>There is 1 item in the List</h3>) : (<h3> There are {length} items in the List</h3>)) : (<h3>Zero Items in the List</h3>)}
    </footer>
  )
}

export default Footer