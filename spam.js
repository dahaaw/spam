const sendSpam = async () => {
    console.log("send spam");
    fetch( 'https://api.telegram.org/bot6788548713:AAFAIplFYIiDSGeHQdSaDdE3Jn70vdob8ls/sendMessage', {
        method: 'POST',
        body: JSON.stringify( {
            "chat_id": "6587922857",
            "text": "TOBAT OM !!!",
            "disable_web_page_preview": false,
            "disable_notification": false,
            "reply_to_message_id": null
        } ),
        headers: { 'content-type': 'application/json' }
    } )
    .then( async response => {
        let retry = response.headers.get( 'retry-after' );
        if( retry ) {
            console.log("Retrying after ", retry);
            setTimeout(() => sendSpam(), Number( retry * 1_000 ) )
        }
        else{
            response = await response.json();
            console.log( response );
            console.log( Date.now() );
            setTimeout(() => sendSpam(), 1_000);
            
        }
    } )
    .catch( err => console.log( err ) )
}
sendSpam();

