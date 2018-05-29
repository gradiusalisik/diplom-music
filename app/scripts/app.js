import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Drift from 'drift-zoom';

import Button from '../blocks/button/button';
import Main from '../blocks/main/main';
import Conductor from '../blocks/conductor/conductor';
import Popup from '../blocks/popup/popup';

$(window).on('click', () => {
	const selector = {
		audio: '.js-audio-click'
	};
	const $audio = $('body').find(selector.audio);

	$audio[0].play();
});

const demoTrigger = document.querySelector('.js-image');
const demoTrigger2 = document.querySelector('.js-image2');
const paneContainer = document.querySelector('.js-for-zoom-photo');

if (demoTrigger && paneContainer) {
	new Drift(demoTrigger, { // eslint-disable-line
		paneContainer: paneContainer,  // eslint-disable-line
		inlinePane: false
	});
}

if (demoTrigger2 && paneContainer) {
	new Drift(demoTrigger2, { // eslint-disable-line
		paneContainer: paneContainer,  // eslint-disable-line
		inlinePane: false
	});
}

$(() => {
	svg4everybody();
});

$(() => new Button().render());
$(() => new Main().render());
$(() => new Conductor().render());
$(() => new Popup().render());
