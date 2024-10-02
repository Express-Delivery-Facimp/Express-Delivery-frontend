import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RegisterInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  type: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string | null;
}

export default function RegisterInput({
  placeholder,
  label,
  type,
  register,
  errorMessage,
  ...rest
}: RegisterInputProps) {
  return (
    <div className=" flex flex-col">
      <div className=" flex flex-col">
        <label className=" text-black font-medium text-base">{label}</label>
        <input
          {...rest}
          {...register}
          type={type}
          placeholder={placeholder}
          className=" bg-[#FFFDFD] border-[1px] border-[#CDCCCC] h-10 rounded-[10px] pl-4 mr-5 focus:outline-none"
        />
      </div>
      {errorMessage && (
        <p className=" text-rose-500 text-sm font-medium pt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
