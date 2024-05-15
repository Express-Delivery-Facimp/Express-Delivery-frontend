import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterInput from '../Input/RegisterInput';
import RegisterButton from '../Button/RegisterButton';
import CheckBox from '../CheckBox/CheckBox';
import axios from 'axios';

// Definindo o schema de validação do Zod
const newUserSchema = z
	.object({
		name: z
			.string()
			.regex(
				/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-'\s][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
				'Digite seu nome e sobrenome'
			),
		cpf: z
			.string()
			.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'Digite um CPF válido!'),
		phone: z.string().min(11, 'Digite um telefone válido'),
		adress: z.string().min(2, 'Digite um endereço válido'),
		email: z.string().email('Digite um email válido'),
		password: z
			.string()
			.min(8, 'A senha deve conter no mínimo 8 caracteres')
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
				'A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.'
			),
		confirm: z.string(),
		agree: z.boolean().refine((val) => val === true, {
			message: 'Você deve aceitar os termos.',
		}),
	})
	.refine((fields) => fields.password === fields.confirm, {
		path: ['confirm'],
		message: 'As senhas devem coincidir',
	});

type NewUserSchema = z.infer<typeof newUserSchema>;

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewUserSchema>({
		resolver: zodResolver(newUserSchema),
	});

	const handleNewUser = async (data: NewUserSchema) => {
		try {
			const bodyPost = {
				name: data.name,
				cpf: data.cpf,
				email: data.email,
				phone: data.phone,
				adress: data.adress,
				password: data.password,
			};
			await axios.post('http://localhost:3000/user', bodyPost);
		} catch (error) {
			console.error('Erro no envio:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleNewUser)}>
			<div className=' flex flex-col gap-2'>
				{/* Input de name */}
				<RegisterInput
					label='Nome completo'
					register={register('name')}
					errorMessage={errors.name?.message}
					type='text'
					placeholder='Digite seu nome e seu sobrenome'
				/>
				{/* Input de CPF */}
				<RegisterInput
					label='CPF'
					register={register('cpf')}
					errorMessage={errors.cpf?.message}
					type='text'
					placeholder='Digite seu CPF'
				/>
				{/* Input de adress */}
				<RegisterInput
					label='Endereço'
					register={register('adress')}
					errorMessage={errors.adress?.message}
					type='text'
					placeholder='Digite seu endereço'
				/>
				{/* Input de celular */}
				<RegisterInput
					label='Telefone'
					register={register('phone')}
					errorMessage={errors.phone?.message}
					type='text'
					placeholder='Digite seu número de celular'
				/>
				{/* Input de Email */}
				<RegisterInput
					label='Email'
					register={register('email')}
					errorMessage={errors.email?.message}
					type='email'
					placeholder='Digite seu email'
				/>
				{/* Input de password */}
				<RegisterInput
					label='Senha'
					register={register('password')}
					errorMessage={errors.password?.message}
					type='password'
					placeholder='Digite sua senha'
				/>
				{/* Input de confirm password */}
				<RegisterInput
					label='Confirmar senha'
					register={register('confirm')}
					errorMessage={errors.confirm?.message}
					type='password'
					placeholder='Confirme sua senha'
				/>
			</div>
			{/* Input de Checkbox de concordar com os termos */}
			<CheckBox
				register={register('agree')}
				errorMessage={errors.agree?.message}
			/>
			{/* Botão de sumissão do formulário */}
			<RegisterButton />
		</form>
	);
}
