import svg4everybody from 'svg4everybody';
import $ from 'jquery';

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

$(() => {
	svg4everybody();
});

$(() => new Button().render());
$(() => new Main().render());
$(() => new Conductor().render());
$(() => new Popup().render());
