import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-main',
			dom: {
				button: '.js-main-button'
			},
			classes: {
				activeButton: 'main_active'
			}
		};

		this.options = $.extend(true, {}, defaults, options);

		this.$el = (this.options.el instanceof $) ? this.options.el : $(this.options.el);

		return this;
	}

	get() {
		this.$button = this.$el.find(this.options.dom.button);

		return this;
	}

	onClick = () => {
		this.$el.toggleClass(this.options.classes.activeButton);
	}

	init() {
		this.$button.on('click', this.onClick);
	}

	render() {
		if (this.$el.length) {
			this
				.get()
				.init();
		}
	}
}
