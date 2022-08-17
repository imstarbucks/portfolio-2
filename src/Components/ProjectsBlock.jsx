const ProjectsBlock = ({title, number, thumb, desc, link}) => {
	return (
		<div className="col-11 col-lg-5">
			<h3 className="d-flex align-items-center font-sm color-yellow font-regular mb-3">
				<span>{number < 10 ? "0" + number : number}</span>
				<span className="line"></span>
				<span>{title}</span>
				</h3>
			<div className="project-wrapper ratio ratio-16x9">
				<img className="bg-black project-thumbnail" src={thumb} alt="Website Thumbnail" />
				<a href={link} target="_blank" className="overlay-wrapper font-sm">
					<p>
						{desc}
					</p>
					<p>
						View Project
					</p>
				</a>
			</div>
		</div>
	)
}

export default ProjectsBlock
