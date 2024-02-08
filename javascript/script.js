
function sendMessage()
{
    const message=document.getElementById('baatein').value;
    const messageBox=document.getElementById('mssg-box');
    const senderMsg=document.createElement('p')
    
    if(message!=='')
    {
    senderMsg.textContent=message;
    senderMsg.setAttribute('id','sender');
    senderMsg.className='msg';
    messageBox.appendChild(senderMsg);
    }
    // document.getElementById('baatein').value='';
    document.getElementById('baatein').value='';
}

document.getElementById('baatein').addEventListener('keydown',function(event)
{
    if(event.key==='Enter')
    {
    sendMessage();
    }
});

