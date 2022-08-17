import { useEffect, useState } from "react"
import { getAllSideProjects } from "../api/ApiCalling"

import ProjectsBlock from "../Components/ProjectsBlock"

const SideProjects = () => {
	const [projects, setProjects] = useState([""])

	let ignore = false;
	useEffect(() => {
		if(!ignore) {
			getAllSideProjects().then(val => {
				setProjects(val)
			})
			console.log(projects);
			ignore=true
		}
	}, [])

	const projectList = projects?.map((project, index) => <ProjectsBlock key={index} number={index += 1} title={project.title} desc={project.description} thumb={project.thumbnail} link={project.url}/>)

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
