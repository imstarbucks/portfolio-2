import gsap from "gsap"
import ScrollToPlugins from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugins);

const Nav = () => {
	const onClickHandler = (e) => {
		e.preventDefault()
		const target = e.target.dataset.target

		moveTo(target)
	}
	return (
		<nav>
			<ul>
				<li className="nav-item">
					<a onClick={onClickHandler} href="/" data-target="#about">$About</a>
				</li>
				<li className="nav-item">
					<a onClick={onClickHandler} href="j/" data-target="#skills">$Skills</a>
				</li>
				<li className="nav-item">
					<a onClick={onClickHandler} href="/" data-target="#projects">$Projects</a>
				</li>
				<li className="nav-item">
					<a onClick={onClickHandler} href="/" data-target="#contact">$Contact</a>
				</li>
			</ul>
		</nav>
	)
}

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

export default Nav
