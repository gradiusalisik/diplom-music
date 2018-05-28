import $ from 'jquery';
import YouTubePlayer from 'youtube-player';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-popup',
			dom: {
				open: '.js-popup-open',
				close: '.js-popup-close',
				player: '.js-video-player',
				audio: '.js-audio-layout',
				button: '.js-button',
				buttonAudio: '.js-button-audio'
			},
			classes: {
				active: 'popup_state_active',
				buttonActive: 'button_active'
			}
		};

		this.options = $.extend(true, {}, defaults, options);
		this.$el = $(this.options.el);
		this.$page = $('body');
		this.$window = $(window);
		this.$document = $(document);
		this.player = null;

		return this;
	}

	getDom() {
		this.$open = this.$page.find(this.options.dom.open);
		this.$close = this.$el.find(this.options.dom.close);
		this.$player = this.$el.find(this.options.dom.player);
		this.$audio = this.$page.find(this.options.dom.audio);
		this.$button = this.$page.find(this.options.dom.button);
		this.$buttonAudio = this.$page.find(this.options.dom.buttonAudio);

		return this;
	}

	onOpen = e => {
		const $target = $(e.currentTarget);
		const popupId = $target.data('popup');
		const $targetPopup = this.$el.filter(`[id=${popupId}]`);

		$targetPopup.addClass(this.options.classes.active);
		if (this.$button.hasClass(this.options.classes.buttonActive)) {
			this.$buttonAudio[0].pause();
		}

		if (this.$audio) {
			this.$audio[0].pause();
		}
		this.youTubePlayer($targetPopup);
	}


	onClose = e => {
		const $target = $(e.currentTarget);
		const $el = $target.closest(this.$el);
		$el.removeClass(this.options.classes.active);

		if (this.$button.hasClass(this.options.classes.buttonActive)) {
			this.$buttonAudio[0].play();
			this.$buttonAudio[0].loop = true;
		}

		if (this.$audio) {
			this.$audio[0].play();
		}
		this.stopVideo();
	}

	youTubePlayer = target => {
		const $targetPlayer = target.find(this.$player);
		const videoId = $targetPlayer.data('youtube');
		if (!videoId) {
			return;
		}
		this.player = new YouTubePlayer($targetPlayer[0], {
			videoId
		}, true);

	}

	stopVideo = () => {
		this.player.stopVideo();
	}

	render() {
		if (this.$el.length) {
			this.getDom();
			this.$open.on('click', this.onOpen);
			this.$close.on('click', this.onClose);
		}
		return this;
	}
}
