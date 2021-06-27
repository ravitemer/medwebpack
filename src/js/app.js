// Import Framework7
import Framework7 from './f7custom';

//import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';
import "./f7custom.css"
/*import welcomescreen from 'f7-welcomescreen';

var welcomescreen_slides = [
  {
    id: 'slide0',
    title: 'Slide 0', // optional
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    title: 'Slide 1', // optional
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    title: 'Slide 2', // optional
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    //title: 'NO TITLE', 
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];*/

// Import Framework7 Styles
//import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
//import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.svelte';

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

//Framework7.use(welcomescreen);

// Define options for welcomescreen plugin
var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
}

// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
 
});
