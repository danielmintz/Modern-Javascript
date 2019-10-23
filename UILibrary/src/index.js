import Tooltip from './ninja.ui/tooltip';
import Dropdown from './ninja.ui/dropdown';
import Tabs from './ninja.ui/tabs';
import './ninja.ui/styles/main.css';
import './ninja.ui/styles/tooltip.css';
import './ninja.ui/styles/dropdown.css';
import './ninja.ui/styles/tabs.css';

//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init()

//create a dropdown
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create a tab

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
  






// const dropdowns = document.querySelectorAll('.dropdown')

// dropdowns.forEach(dropdown => {
//     const instance = new Dropdown(dropdown);
//     instance.init()
// })