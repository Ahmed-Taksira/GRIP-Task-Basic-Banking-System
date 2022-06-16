import React from 'react'

export default function TransactionDetails(props) {
  return (
    <div>
        <p>ID: {props.T._id}</p>
        <p>Sender: {props.T.sender}</p>
        <p>Receiver: {props.T.receiver}</p>
        <p>Amount Transferred: {props.T.amount}</p>
    </div>
  )
}
