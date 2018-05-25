import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import Button from '../blocks/button/button';

$(() => {
	svg4everybody();
});

$(() => new Button().render());
