import { useContext, useEffect } from "react"

const SkillsBlock = ({title, skills, slug}) => {
	// console.log(title, "here");
	let skillType = "skill-block"
	if (slug === "front-end") {
		skillType += " skill-block--front-end"
	} else if (slug === "back-end") {
		skillType += " skill-block--back-end"
	} else {
		skillType += " skill-block--additional"
	}

	const skillList = skills
	const skillComponent = skillList && skillList.map((skill, index) =>
		<span key={index} className={skillType}>{skill}</span>
	)
	return (
		<>
			<h3 className="color-white">
				{title}
			</h3>
			<div className="skills-list">
				{skills && skillComponent}
			</div>
		</>
	)
}

export default SkillsBlock
