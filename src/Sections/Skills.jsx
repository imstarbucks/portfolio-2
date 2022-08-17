import { createContext, useEffect, useState } from "react"

import { getAllSkills } from "../api/ApiCalling"

import SkillsBlock from "../Components/SkillsBlock"

const Skills = () => {

	// const skillList = getAllFrontEnd().then().map((data) => {
	// 		<SkillsBlock title={data.title.rendered}/>
	// 	})
	const [skills, setskills] = useState([""])
	let ignore = false;
	useEffect(() => {
		if(!ignore) {
			getAllSkills().then(val => {
				console.log(val);
				setskills(val)
			})
			// console.log("state");
			ignore=true
		}
	}, [])
	// console.log(skills);
	const listSkills = skills && skills.map((skill, index) =>
		<SkillsBlock key={skill && skill.id} title={skill.title} skills={skill.skills} slug={skill.slug}></SkillsBlock>
	)

	return (
		<section className="section-skills center-container" id="skills">
			<header>
				<h2 className="header-line">
					My Skills
				</h2>
			</header>
			{skills && listSkills}
		</section>
	)
}

export default Skills
