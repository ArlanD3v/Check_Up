import serviceDoctor from "../services/service.doctor.js"

async function ListarDoctors(req, res) {

	const doctors = await serviceDoctor.ListarDoctors()


	res.status(200).json(doctors)
}
export default { ListarDoctors }