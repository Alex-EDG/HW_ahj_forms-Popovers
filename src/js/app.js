import Button from './Button';
import Tooltip from './Tooltip';
import TooltipSwitch from './TooltipSwitch';

const button = new Button('Click to toggle popover');
const tooltip = new Tooltip('Tooltip title', "And here's some amazing content. It's very engaging. Right?");
const tooltipSwitch = new TooltipSwitch(button, tooltip);
tooltipSwitch.bindToDOM(document.querySelector('.component'));
tooltipSwitch.init();
