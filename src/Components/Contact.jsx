import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Footer from './Footer'
import Header from './Header'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const FormValidation = () => {
	const MySwal = withReactContent(Swal)
	const { register, handleSubmit, formState: { errors }, watch } = useForm()
	const customSubmit = (data) => {
		console.log(data);
		MySwal.fire({
			title: <strong>Información enviada</strong>,
			html: <div>
				<li> nombre :  {data.name}</li>
				<li> Descripción :  {data.description}</li>
				<li> Link :  {data.link}</li>
				<li> Correo :  {data.mail}</li>
			</div>,

			icon: 'success'
		});
	}

	const [colorInput, setColorInput] = useState('#fff7f7')
	useEffect(() => {
		let words = watch('prueba')
		if (words === 'react') { setColorInput('#614ad3') }
	})

	return (
		<><Header></Header>
			<h2 className='titleform'>Petición para añadir receta</h2>
			<div className='contenido'>


				<div className='formulario'>
					<form onSubmit={handleSubmit(customSubmit)} className='form-react'>
						<div className='form-control'>
							<label>Nombre de la receta </label>
							<input type="text" {...register('name', {
								required: true,
								maxLength: 40
							})} />
							{errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
							{errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 40</small>}


							<br />
							<label>Descripción general de la receta</label>
							<textarea type="text" {...register('description', {
								required: {
									value: true,

								}, maxLength: 500
							})} />
							{errors.description && <small className='fail'>{errors.description.message}</small>}
							{errors.description?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
							{errors.description?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 500</small>}
							<br />
							<label>Link de receta en youtube / drive</label>
							<input type="text" {...register('link', {
								required: {
									value: true,

								}, maxLength: 200
							})} />
							{errors.link && <small className='fail'>{errors.link.message}</small>}
							{errors.link?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
							{errors.link?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 200</small>}
							<br />


							<label>Correo de Contacto</label>
							<input
								{...register("mail", {
									required: "Correo requerido",
									pattern: { value: /^\S+@\S+$/i, message: 'El e-mail no es valido' }
								})}
								aria-invalid={errors.mail ? "true" : "false"}

							/>
							{errors.mail && <p className='fail' role="alert">{errors.mail?.message}</p>}
							<button type='submit'>Send</button>
						</div>

					</form>
				</div>


				<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
			</div>

			<Footer></Footer>
		</>
	)
}

export default FormValidation