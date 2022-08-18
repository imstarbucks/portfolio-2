import ProjectsBlock from "../Components/ProjectsBlock"
import khScreenshot from '../assets/img/kusto-home-screenshot.png'
import ubScreenshot from '../assets/img/urban-green-screenshot.png'
import ffScreenshot from '../assets/img/ff-cny2022-screenshot.png'


const Projects = () => {
	const projects = [
		{
			"id": "01",
			"title": "Kusto Home",
			"project_desc": "Kusto Home is a Vietnam cooperate website, the website consist multiple features such as simple filter function, multi language, and form submission.",
			"project_link": "https://kustohome.com.vn/",
			"project_screenshot": khScreenshot
		}, {
			"id": "02",
			"title": "Urban Green",
			"project_desc": "Urban Green Vietnam is part of a property project from Kusto Home. Some features from the website are interaction svg, location map svg animation, multi language.",
			"project_link": "https://urbangreen.vn/",
			"project_screenshot": ubScreenshot
		}, {
			"id": "03",
			"title": "Forefront International CNY 2022",
			"project_desc": "This project is an internal project from the company that I worked for (Forefront International). The website is to promote the sister company during 2022 Chinese New Year. The main highlight of the website is the landing section, where the animation was built by using GSAP.",
			"project_link": "http://forefront-cny2022.preview.forefront.international/",
			"project_screenshot": ffScreenshot
		}
	]

	const projectList = projects?.map((project, index) => <ProjectsBlock key={index} number={index += 1} title={project.title} desc={project.project_desc} thumb={project.project_screenshot} link={project.project_link}/>)

	return (
		<section className="section-project" id="projects">
			<header className="center-container">
				<h2 className="header-line">
					My Projects
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

export default Projects
