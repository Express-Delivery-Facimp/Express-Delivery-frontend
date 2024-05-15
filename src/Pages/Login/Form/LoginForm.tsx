import LoginInput from '../Input/LoginInput';
import mail from '../../../../assets/icons/mailRegister.svg';
import password from '../../../../assets/icons/passwordRegister.svg';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const userEnterSchema = z.object({
	email: z.string().email('Digite um email válido'),
	senha: z.string(),
});
type UserEnterSchema = z.infer<typeof userEnterSchema>;

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserEnterSchema>({
		resolver: zodResolver(userEnterSchema),
	});

	async function handleUserEnter(data: UserEnterSchema) {
		console.log(data);

		const users = await axios.get('http://localhost:3000/user');

		const password = users.data.find(
			(item: any) => item.password === data.senha
		);

		if (password) {
			// enviar para o app
			return
		}

		// retorna para o login
	}

	return (
		<form
			onSubmit={handleSubmit(handleUserEnter)}
			className='flex flex-col gap-6 w-[90%]'
		>
			<LoginInput
				register={register('email')}
				type='email'
				label='Email'
				placeholder='Digite seu E-mail'
				image={mail}
				errorMessage={errors.email?.message}
			/>
			<LoginInput
				register={register('senha')}
				type='password'
				label='Senha'
				placeholder='Digite sua senha'
				image={password}
				errorMessage={errors.senha?.message}
			/>
			<button
				type='submit'
				className=' bg-white text-red-600 h-12 rounded-[10px] hover:opacity-90'
			>
				Entrar
			</button>
			<p className=' text-white cursor-pointer hover:opacity-80 text-sm font-normal'>
				Esqueceu a senha?
			</p>
		</form>
	);
}
