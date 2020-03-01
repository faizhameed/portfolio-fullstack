import clothingImg from '../assets/projects/clothingStore.png'
import faceRecoImg from '../assets/projects/facerecognition.png'
import emailChipsImg from '../assets/projects/emailchips.gif'
import landingPageImg from '../assets/projects/landing-page.png'
import robotappImg from '../assets/projects/robotapp.png'
import JavscriptClockImg from "../assets/projects/JavscriptClock.gif"

let project_list = [
	{
		image:
			clothingImg,
		title: 'Online Clothing Store',
		des:
			"Full Stack Project using ReactJS and FIREBASE Development of new highly-responsive, web-based user interface Online payment implementation with stripe State Managment using Redux",
		tags: [  'React', 'Redux','Firebase', 'JavaScript' ],
		links: {
			launch: 'https://online-clothing-store.herokuapp.com/',
			github: 'https://github.com/faizhameed/clothing_store'
		}
	},
	{
		image:
			faceRecoImg,
		title: 'Face Recognition Web App',
		des:
			"Full Stack Project using ReactJS and ExpressJS (NodeJS) Development of new highly-responsive, web-based user interface. Application detects faces in any image ",
		tags: [ 'ExpressJs', 'Javascript','Nodejs','ReactJs' ],
		links: {
			launch: 'https://smart-brain6.herokuapp.com/',
			github: 'https://www.github.com/Dhaval1403/React-Portfolio-Template'
		}
	},
	{  /* -------------------------------- */
		image:
			emailChipsImg,
		title: 'Email Chip',
		des:
			"A very simple react application representing the email chip function adding and removing chips when sending emails",
		tags: [ 'CSS', 'React', 'JavaScript' ],
		links: {
			launch: 'https://faizhameed.github.io/emailChips/',
			github: 'https://github.com/faizhameed/forCollabera'
		}
	},
	{/* -------------------------------- */
		image:
			landingPageImg,
		title: 'Landing Page',
		des:
			"Landing Page developed for Corefactors bangalore. Customer Relationship Management Service offered to help business manage their customers",
		tags: [ 'HTML', 'CSS', 'JavaScript', 'JQuery' ],
		links: {
			launch: 'https://faizhameed.github.io/landing-page2/.',
			github: 'https://github.com/faizhameed/landing-page2'
		}
	},
	{/* -------------------------------- */
		image:
			robotappImg,
		title: 'Robot Search App',
		des:
			"A simple search application with ReactJS. Fetching Api from JSON placeholder to develop a set of robot cards where user can search names",
		tags: [ 'React', 'HTML', 'CSS', 'JavaScript' ],
		links: {
			launch: 'https://faizhameed.github.io/robotapp/',
			github: 'https://github.com/faizhameed/robotapp'
		}
	},
	{/* -------------------------------- */
		image:
			JavscriptClockImg,
		title: 'JavaScript Clock',
		des:
			"Javascript Clock is an application built with VanillaJS , where local time is fetched and shown in a clock. It has hour, minute and second hands",
		tags: ['HTML', 'CSS', 'JavaScript' ],
		links: {
			launch: 'https://faizhameed.github.io/JavascriptClock/',
			github: 'https://github.com/faizhameed/JavascriptClock'
		}
	}
];

export default project_list;
