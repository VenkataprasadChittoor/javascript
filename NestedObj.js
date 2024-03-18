let object = {
	Company:
	{
		name: "GeeksforGeeks",
		location: "Noida",
		Domains:
		{
			Courses: ["DSA Self Paced Course",
				"Full Stack Development",
				"Devops Boot Camp",
				"GATE Prepration"],
			Articles: [
				`Interview Prepration, Algorithms,
				Data Structures, Web Development`]
		}
	},
}
console.log(object.Company.Domains.Articles);