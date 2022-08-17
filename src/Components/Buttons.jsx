import gsap from "gsap"
import ScrollToPlugins from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugins);

import resume from "/files/Resume-Spencer-Wong.pdf"

export const RoundedBtn = ({color, text}) => {

	const moveTo = (target) => {
		gsap.to(window, {
			duration: "300ms",
			scrollTo: {
				y: target,
				offsetY: 90
			},
			onComplete: () => {
				// document.body.classList.toggle('menu-opened');
			},
		});
	}

	const onClickMove = (e) => {
		e.preventDefault()

		moveTo('#contact')
	}

	return (
		<a role="button" onClick={onClickMove} className="btn-rounded" data-bg-color={color}>{text}</a>
	)
}

