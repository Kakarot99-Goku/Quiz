// const INTERVAL = 5000;
// setTimeout(function(){
//     chrome.tabs.create({url: 'http://www.stackoverflow.com', active: false }, tab =>{
//         setTimeout(function(){
//             chrome.tabs.remove(tab.id);
//         },INTERVAL);
//     }); 
// },INTERVAL);
// // let winStacko; setTimeout(() => { winStacko=open('https:www.stackoverflow.com');},30*1000); setTimeout(() => winStacko.close(), 30*1000);

window.addEventListener('blur', stopTimer);
function stopTimer() {
    console.log('d');
    window.close();
   }