import ProjectsBlock from "../Components/ProjectsBlock"

import hiveScreenshot from '../assets/img/hive-screenshot.png'

const SideProjects = () => {
	const projects = [
		{
			"title": "Hive App",
			"project_desc": "This is a prototype of an existing app called Hive App, which is from 42KL Hackathon 2022. This project is done by 5 members, my main focus on this challange is on the UI UX development",
			"project_link": "https://www.figma.com/proto/A1RhCsnJptze9uVwiBMjYr/Hive-App?page-id=0%3A1&node-id=69%3A1426&starting-point-node-id=69%3A1426",
			"project_screenshot": hiveScreenshot
		}
	]

	const projectList = projects?.map((project, index) => <ProjectsBlock key={index} number={index += 1} title={project.title} desc={project.project_desc} thumb={project.project_screenshot} link={project.project_link}/>)

	return (
		<section className="section-side-project">
			<header className="center-container">
				<h2 className="header-line">
					Side Projects
				</h2>
			</header>
			<div className="container">
				<div className="row justify-content-center gy-5">
					{projects && projectList}
				</div>
			</div>
		</section>
	)
}

export default SideProjects
