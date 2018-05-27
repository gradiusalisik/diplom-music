import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import Button from '../blocks/button/button';
import Main from '../blocks/main/main';

$(() => {
	svg4everybody();
});

$(() => new Button().render());
$(() => new Main().render());
