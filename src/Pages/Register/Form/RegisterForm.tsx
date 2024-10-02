import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterInput from '../Input/RegisterInput';

import RegisterButton from '../Button/RegisterButton';
import CheckBox from '../CheckBox/CheckBox';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
    address: z.string().min(2, 'Digite um endereço válido'),
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

  const navigate = useNavigate();
  function handleNewUser(data: NewUserSchema) {
    console.log(data);
    toast.success('Cadastro concluído!');
    setTimeout(() => {
      navigate('/Login');
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit(handleNewUser)}>
      <Toaster />
      <div className=" flex flex-col gap-2">
        {/* Input de name */}
        <RegisterInput
          autoComplete="off"
          label="Nome completo"
          register={register('name')}
          errorMessage={errors.name?.message}
          type="text"
          placeholder="Digite seu nome e seu sobrenome"
        />
        {/* Input de CPF */}
        <RegisterInput
          autoComplete="off"
          label="CPF"
          register={register('cpf')}
          errorMessage={errors.cpf?.message}
          type="text"
          placeholder="Digite seu CPF"
        />
        {/* Input de adress */}
        <RegisterInput
          autoComplete="off"
          label="Endereço"
          register={register('address')}
          errorMessage={errors.address?.message}
          type="text"
          placeholder="Digite seu endereço"
        />
        {/* Input de celular */}
        <RegisterInput
          autoComplete="off"
          label="Telefone"
          register={register('phone')}
          errorMessage={errors.phone?.message}
          type="text"
          placeholder="Digite seu número de celular"
        />
        {/* Input de Email */}
        <RegisterInput
          autoComplete="off"
          label="Email"
          register={register('email')}
          errorMessage={errors.email?.message}
          type="email"
          placeholder="Digite seu email"
        />
        {/* Input de password */}
        <RegisterInput
          autoComplete="off"
          label="Senha"
          register={register('password')}
          errorMessage={errors.password?.message}
          type="password"
          placeholder="Digite sua senha"
        />
        {/* Input de confirm password */}
        <RegisterInput
          autoComplete="off"
          label="Confirmar senha"
          register={register('confirm')}
          errorMessage={errors.confirm?.message}
          type="password"
          placeholder="Confirme sua senha"
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
