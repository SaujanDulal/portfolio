// select DOM items
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const navUl = document.querySelector('.nav__List-items');
const navImageContainer = document.querySelector('.nav__Image-container');
const navLis = document.querySelectorAll('.nav__List-item');

// Set Initial state of menu
let showMenu = false;

function toggleMenu() {
	if (!showMenu) {
		hamburgerMenu.classList.add('close');
		nav.classList.add('show');
		navUl.classList.add('show');
		navImageContainer.classList.add('show');
		navLis.forEach((item) => {
			item.classList.add('show');
		});
		// change state of menu

		showMenu = true;
	} else {
		hamburgerMenu.classList.remove('close');
		nav.classList.remove('show');
		navUl.classList.remove('show');
		navImageContainer.classList.remove('show');
		navLis.forEach((item) => {
			item.classList.remove('show');
		});
		showMenu = false;
	}
}

hamburgerMenu.addEventListener('click', toggleMenu);

// Include images
let img_src = [
	'assets/images/react.svg',
	'assets/images/html5.svg',
	'assets/images/sass.svg',
	'assets/images/bootstrap.svg',
	'assets/images/css3.svg',
	'assets/images/webpack.svg',
	'assets/images/javascript.svg',
	'assets/images/vscode.png',
	'assets/images/git.svg',
	'assets/images/vscode.svg',
	'assets/images/gatsby.svg'
];

// Name images included
let image_type = img_src.map(function(cuurentEl, index) {
	return 'image' + index;
});

// Configure particles-js
particlesJS('particles-js', {
	particles: {
		number: {
			value: img_src.length, // No of images
			density: {
				enable: true,
				value_area: 400 // Specify area (Lesser is greater density)
			}
		},
		color: {
			value: '#5affd4'
		},
		shape: {
			type: image_type, // Add images to particle-js
			stroke: {
				width: 0
			},
			polygon: {
				nb_sides: 4
			}
		},
		opacity: {
			value: 0.9, // Adjust opactiy
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: true
			}
		},
		size: {
			value: 10, // Adjust the image size
			random: false,
			anim: {
				enable: true,
				speed: 100,
				size_min: 40,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 200,
			color: '#ffffff',
			opacity: 1,
			width: 2
		},
		move: {
			enable: true,
			speed: 4, // Speed of particle motion
			direction: 'top',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: true,
			attract: {
				enable: true,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'grab'
			},
			onclick: {
				enable: true,
				mode: 'push'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 5
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
});
