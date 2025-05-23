import repoDoctor from "../repositories/repository.doctor.js"
async function ListarDoctors() {

	const doctors = await repoDoctor.ListarDoctors()

	return doctors
}

export default { ListarDoctors }