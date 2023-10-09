import './index.css';

import { heroJs } from '$utils/form';
import { openScreen } from '$utils/fullscreen';

window.Webflow ||= [];
window.Webflow.push(() => {
  heroJs();
  openScreen();
});
