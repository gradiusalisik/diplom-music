import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-conductor',
			dom: {
				instrument: '.js-conductor-instruments',
				audio: '.js-conductor-audio'
			},
			classes: {
				active: 'active'
			}
		};

		this.options = $.extend(true, {}, defaults, options);

		this.$el = (this.options.el instanceof $) ? this.options.el : $(this.options.el);

		return this;
	}

	get() {
		this.$instrument = this.$el.find(this.options.dom.instrument);
		this.$audio = this.$el.find(this.options.dom.audio);

		return this;
	}

	onClick = e => {
		const $target = $(e.currentTarget);
		const $audio = $target.find(this.$audio);
		if ($target.hasClass(this.options.classes.active)) {
			$target.removeClass(this.options.classes.active);
			$audio[0].muted = false;
		}else {
			$target.addClass(this.options.classes.active);
			$audio[0].muted = true;
		}
	}

	init() {
		this.$instrument.on('click', this.onClick);
	}

	render() {
		if (this.$el.length) {
			this
				.get()
				.init();
		}
	}
}
