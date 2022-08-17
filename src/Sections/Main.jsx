import helloMemoji from '/img/memoji-hello.png'
import handMemoji from '/img/memoji-hand.png'
import { createContext, useEffect, useState } from "react"

import { RoundedBtn } from '../Components/Buttons'

const Main = () => {


	return (
		<main>
			<section className="section-main mt-5 center-container">
				<img className='hello-memoji d-block m-auto' src={helloMemoji} alt="Hello Memoji" />
				<h1 className='header-intro'>
					<span className='color-yellow font-xl'>HI</span>
					<img className="mx-3" src={handMemoji} alt="Handwave Memoji" />
					<span className='color-yellow font-xl'>I'M</span>
					<br />
					<span className='color-white font-xxl'>SPENCER
						<br/>
						WONG
					</span>
				</h1>
				<div className="h1 d-flex justify-content-between">
					<div className="font-xl color-yellow text-uppercase">
						Front-end <br />
						Web Developer
					</div>
				</div>
				<p className='font-md my-4'>
					I’m a fresh grad front-end web developer who always has a strong willingness to learn
				</p>
				<RoundedBtn color="yellow" text="Contact me"/>
			</section>
		</main>
	)
}

export default Main
