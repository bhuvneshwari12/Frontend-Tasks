import React from 'react';
import { useLocation } from 'react-router-dom';
import './MessageDetial.css'; // Import CSS file

const MessageDetail = () => {
    const location = useLocation();
    const { message } = location.state;

    if (!message) {
        return <div className="loading">Loading...</div>; // Apply loading class
    }

    return (
        <div className="message-container">
            <h2>Message Detail</h2>
            <div className="message-details">
                <div><span>From:</span> {message.sender}</div>
                <div><span>To:</span> {message.recipient}</div>
                <div><span>Subject:</span> {message.subject}</div>
                <div><span>Message:</span> {message.message}</div>
                <div><span>Sent At:</span> {new Date(message.sentAt).toLocaleString()}</div>
            </div>
        </div>
    );
};

export default MessageDetail;
