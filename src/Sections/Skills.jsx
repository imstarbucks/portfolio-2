import SkillsBlock from "../Components/SkillsBlock"

const Skills = () => {

	const skills = [
		{
			"id": "01",
			"slug": "font-end",
			"title": "Front-end",
			"skills": ["ReactJS", "GSAP", "Bootstrap", "SASS", "ES6", "JQUERY", "HTML", "CSS", "JavaScript"]
		}, {
			"id": "02",
			"slug": "back-end",
			"title": "Back-end",
			"skills": ["PHP", "WordPress"]
		}, {
			"id": "03",
			"slug": "additional",
			"title": "Additional",
			"skills": ["Docker", "Figma", "Adobe XD", "Jekyll"]
		}
	]

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
