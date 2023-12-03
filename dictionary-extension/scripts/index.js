const getSelectedText = () => {
    if(window.getSelection) return window.getSelection().toString();
    if(document.getSelection) return document.getSelection().toString();
}

document.addEventListener('mouseup',async ()=>{
    const text = getSelectedText().trim();
     if(text.length) {
        const word = text.split(/ +/g)[0];
        await chrome.storage.local.set({word});
    }
});


