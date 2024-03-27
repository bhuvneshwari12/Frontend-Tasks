import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './MailBoxPage.css'; // Import custom CSS file
import { AuthContext } from '../../Store/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const MailBoxPage = () => {
    const history=useHistory()
    const authctx = useContext(AuthContext)
    const [recipient, setRecipient] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [subject, setSubject] = useState('');

    
    const handleSendEmail = (event) => {
        event.preventDefault()
        const userEmail = localStorage.getItem('email')
        const userName = userEmail && userEmail.split('@')[0]

        console.log(userEmail)

        
        fetch(`https://react-http-8e0dd-default-rtdb.firebaseio.com/mail/${userName}.json`, {
            method: 'POST',
            body: JSON.stringify({ subject, recipient, emailContent, sender: userEmail, sentAt: new Date().toISOString (),read:false,id:Date.now()}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to store email')
                }
                console.log('email sucessfully  sent')
                setRecipient(' ')
                setSubject(' ')
                setEmailContent(' ')
                history.push('/inbox')
            })
            .catch(error => {
                alert(error)
                console.log('error storing email', error)
            })
            
    };

    return (
        <div className="compose-mail-container">
            <h1 className='heading'>𝐂𝐨𝐦𝐩𝐨𝐬𝐞 𝐌𝐚𝐢𝐥</h1>
            <div className="compose-mail-form">

                <input
                    type="text"
                    placeholder="Recipient"
                    value={recipient}
                    onChange={(e) => { setRecipient(e.target.value) }}
                    className="recipient-input"
                />


                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    className="subject-input"
                />

                <ReactQuill
                    theme="snow"
                    value={emailContent}
                    onChange={setEmailContent}
                    className="text-editor"
                    placeholder="Compose your mail..."
                />
            </div>


            <button onClick={handleSendEmail} className="send-button">
                Send
            </button>
        </div>
    );
};

export default MailBoxPage;