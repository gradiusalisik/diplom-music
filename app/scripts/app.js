import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import Button from '../blocks/button/button';
import Main from '../blocks/main/main';
import Conductor from '../blocks/conductor/conductor';

$(() => {
	svg4everybody();
});

$(() => new Button().render());
$(() => new Main().render());
$(() => new Conductor().render());
