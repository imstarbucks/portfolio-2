import contactMemoji from '/img/memoji-contact.png'

const Connect = () => {

	return(
		<section className="section-connect" id="contact">
			<div className="center-container">
				<header>
					<img className="mb-3" src={contactMemoji} alt="Contact Memoji" />
					<h2 className="header-line">
						Let's Connect
					</h2>
				</header>
				<div className="content-wrapper">
					<h3 className="color-white">
						Get In Touch
					</h3>
					<p className='my-3'>
						Connect with me if you are intersted to collaborate with me, or if you just wanted to say hi.
					</p>
					<a className='email-btn' href="mailto:spenwong98@gmail.com">spenwong98@gmail.com</a>
					<a target="_blank" href="https://www.facebook.com/spencer.wong.391/">Facebook</a>
					<a target="_blank" href="https://www.instagram.com/spenwong/?hl=en">Instagram</a>
					<a  target="_blank"href="https://www.linkedin.com/in/spencer-wong-8946b6127/">LinkedIn</a>
				</div>
			</div>
		</section>
	)
}

export default Connect
