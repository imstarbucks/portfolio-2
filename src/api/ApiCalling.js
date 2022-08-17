import axios from "axios"


export const getAllSkills = async () => {
	try {
		const res = await axios.get('/data/skillsData.json')
		// console.log(res)
		const datas = res.data.map(d => {
			// console.log(datas)
			return {
				"id" : d.id,
				"slug" : d.slug,
				"title" : d.title,
				"skills" : d.skills
			}
		})
		// console.log(datas)
		return datas
	} catch (err) {
		console.log(err)
	}
}

export const getAllProjects = async () => {
	try {
		const res = await axios.get('/data/projectsData.json')
		console.log(res.data)
		const datas = res.data.map(d => {
			// console.log(datas)
			return {
				"id" : d.id,
				"title" : d.title,
				"description" : d.project_desc,
				"thumbnail": d.project_screenshot,
				"url": d.project_link
			}
		})
		// console.log(datas)
		return datas
	} catch (err) {
		console.log(err)
	}
}

export const getAllSideProjects = async () => {
	try {
		const res = await axios.get('/data/sidesData.json')
		console.log(res.data)
		const datas = res.data.map(d => {
			// console.log(datas)
			return {
				"id" : d.id,
				"title" : d.title,
				"description" : d.project_desc,
				"thumbnail": d.project_screenshot,
				"url": d.project_link
			}
		})
		// console.log(datas)
		return datas
	} catch (err) {
		console.log(err)
	}
}
