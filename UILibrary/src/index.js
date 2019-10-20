import Tooltip from './ninja.ui/tooltip';
import Dropdown from './ninja.ui/dropdown';
import './ninja.ui/styles/main.css';
import './ninja.ui/styles/tooltip.css';
import './ninja.ui/styles/dropdown.css';

//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init()

//create a dropdown
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init()
})