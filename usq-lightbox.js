

function lightBox () {

	var f = {

		element : {
			overlay: $('<div class="displayBox">'),
			underlay: $('<div>'),
			loadingSpinner: $('<img src="data:image/gif;base64,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">'),
			description: $('<div>'),
			closeButton: $('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAFVBMVEUAAAD8/Pz+/v77+/v5+fn8/Pz///+eabYrAAAABnRSTlMAbPdKHUjTsx5rAAAA40lEQVRIx73VsQ2DMBCF4UTJAFRZAEGNMgEjsAIUt/8IURyh57xX/B3ubOwPsH13t8vaM4fWv9578Of3qe895t0nvI6tB6oGA6rGHqjaDag6lh44CQGNEHASAr6EABECGiHgRwgQ0YCTECDiOVeJENCIVV0RAmrPvq2IgViQRAI2FIARDiRhQBIGJGFAEgYYkYAIAEQIcAIAEQKcAEBEAkkMPAFfwR+Jv8kbhVvNh4XHzRcGrxxfWrz2HDgYehy8GP6cQCgFcRKDNDhRIt0oFWMyp3KABYVKEhW1BcriyIX1qvYBLSxAzhdBStoAAAAASUVORK5CYII=">')
		},

		init: function () {

				//Set initial values for overlay
				f.element.overlay.css({
					height: '100%',
					width: '100%',
					position: 'fixed',
					top: 0,
					bottom: 0,
					left: 0,
					'-webkit-transform': 'translateZ(0)',
					'-moz-transform': 'translateZ(0)',
					'-o-transform': 'translateZ(0)',
					'transform': 'translateZ(0)',
					right: 0,
					'z-index': 999999,
					'display': 'none'

				})
				.velocity('fadeOut', {duration:0})
				.appendTo(document.body);

				f.element.underlay.css({
					height: '100%',
					width: '100%',
					position: 'fixed',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					opacity: '0.7',
					'background-color': '#000',
					'z-index': 700

				})
				.click(f.close)
				.appendTo(f.element.overlay);


				f.element.description.css({
					height: '50px',
					width: '100%',
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					'background-color': '#1e1e1e',
					'z-index': 700

				})
				//.appendTo(f.element.overlay);



				f.element.closeButton.css({
					height: '32px',
					width: '32px',
					position: 'fixed',
					top: 0,
					right: 0,
					cursor: 'pointer',
					padding:'20px',
					'z-index': 2000

				})
				.click(f.close)
				.appendTo(f.element.overlay);




				f.element.loadingSpinner.css({
					height: '24px',
					width: '24px',
					position: 'fixed',
					margin:'auto',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					padding: '16px',
					'background-color': '#000',
					'border-radius': '5px',
					'z-index': 900

				})
				.velocity('transition.expandOut', {duration:0})
				.appendTo(f.element.overlay);

//player.vimeo.com/video/

			$('[href*="vimeo.com"], [href*="youtube.com"]').off().click(f.open);

			$(window).bind('resize', function () {
				if(	f.element.temp && f.element.temp[0].localName.toLowerCase() === 'iframe') {
					f.element.temp.velocity('stop').velocity(f.calculateSize(), {delay:200})
				}

			})
			return f;
		},

		open:function (event) {
			console.log(f.element.overlay)
			f.element.overlay.velocity('fadeIn', {duration:500, complete: function () {}});
			f.element.loadingSpinner.velocity('transition.expandIn', {delay:200, duration:600});


			if(!!event && !!event.target) {
				event.preventDefault();
				event.stopPropagation();

				//f.element.description.text($(this).attr('title'))

				var origElement = $(this),
					videoLink = '',
					raw = origElement.attr('href');

					if(raw.indexOf('vimeo.com') != -1 && raw.indexOf('player.vimeo.com') === -1) {
						var b = raw.substr(0, raw.lastIndexOf('/'));
						b = b.substr(b.lastIndexOf('/')+1);
						videoLink = '//player.vimeo.com/video/' + b;
						console.log(videoLink)
					}
						
					if(raw.indexOf('youtube') != -1) {

					}

					f.element.temp = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitallowfullscreen >').css({
						position: 'absolute',
						top: '0px',
						margin: 'auto',
						bottom: '0px',
						left: '0px',
						right: '0px',
						border: 'none',
						'z-index':1000
					}).css(f.calculateSize())
					.velocity('fadeOut', {duration:0})
					.bind('load', function () {
						f.phase = 'loaded'
						f.element.loadingSpinner.velocity('transition.expandOut', {duration:300});
						f.element.temp.velocity('transition.expandIn', {delay:100, duration:600});
					})
					.attr('src', videoLink || raw)
					.appendTo(f.element.overlay);
				

			}


			return f;

		},

		close: function (force) {
			if((f.phase !== 'close' && f.element.temp)  || !!force) {
				f.element.overlay.velocity('fadeOut', {duration:500});
				

				if(f.phase !== 'loaded') f.element.loadingSpinner.velocity('transition.expandOut', {duration:200});
				try {

				f.element.temp.velocity('transition.expandOut', {duration:600, complete:function () {
					f.phase = null;
					f.element.temp.remove();
					delete f.element.temp;
				}});
			} catch(e){}
				f.phase = 'close';
			}
		},

		calculateSize: function () {
			var ratioHeight =  1.7777777777777777,//16/9,
				ratioWidth =  0.5625, //9/16;
				width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-100,
				height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)-100;

				if (width > height) { //Go by height
					var nWidth =  Math.max(320, Math.min(height*ratioHeight, width, 800));
					return {
						width: nWidth,
						height: nWidth*ratioWidth
					}
				}
				else {//Go by width
					var nHeight = Math.max(120, Math.min(width*ratioWidth, height, 800));
					return {
						width: nHeight*ratioHeight,
						height: nHeight
					}
				}

			return
		}

	}

	return f;

}

$(function () {
	box = new lightBox().init();
})
