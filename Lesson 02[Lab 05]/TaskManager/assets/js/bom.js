/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const href=location.href;
const protocol=location.protocol;
const host=location.host;
const port=location.port;
const hostname=location.hostname;

const appname=navigator.appName;
const appversion=navigator.appVersion;
const platform=navigator.platform;
const language=navigator.language;
const cookieenabled=navigator.cookieEnabled;

const height=screen.height;
const width=screen.width;
const pixeldepth=screen.pixelDepth;
const length= history.length;
const state= history.state;





document.getElementById('href').innerHTML=href;
document.getElementById('protocol').innerHTML=protocol;
document.getElementById('host').innerHTML=host;
document.getElementById('port').innerHTML=port;
document.getElementById('hostname').innerHTML=hostname;

document.getElementById('appname').innerHTML=appname;
document.getElementById('appversion').innerHTML=appversion;
document.getElementById('platform').innerHTML=platform;
document.getElementById('language').innerHTML=language;
document.getElementById('cookienabled').innerHTML=cookieenabled;

document.getElementById('height').innerHTML=height;
document.getElementById('width').innerHTML=width;
document.getElementById('pixeldepth').innerHTML=pixeldepth;

document.getElementById('length').innerHTML=length;
document.getElementById('state').innerHTML=state;


const search=document









// Display the BOM Information on the innerHTML of the elements