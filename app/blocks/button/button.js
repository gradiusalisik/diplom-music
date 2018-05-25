import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-button',
			dom: {
				audio: '.js-button-audio'
			},
			classes: {
				active: 'button_active'
			}
		};

		this.options = $.extend(true, {}, defaults, options);

		this.$el = (this.options.el instanceof $) ? this.options.el : $(this.options.el);

		return this;
	}

	get() {
		this.$audio = this.$el.find(this.options.dom.audio);

		return this;
	}

	onClick = e => {
		const { active } = this.options.classes;
		const $target = $(e.currentTarget);
		const $audio = $target.find(this.$audio);
		const audio = $audio[0];

		if ($target.hasClass(active)) {
			$target.removeClass(active);
			audio.pause();
		}else {
			$target.addClass(active);
			audio.play();
			audio.loop = true;
		}
	}

	init() {
		this.$el.on('click', this.onClick);
	}

	render() {
		if (this.$el.length) {
			this
				.get()
				.init();
		}
	}
}
