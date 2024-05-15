import { UseFormRegisterReturn } from "react-hook-form";

interface LoginInputProps{
  placeholder: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  errorMessage?: string | null;
  image: string;
}
export default function LoginInput({ label, type, placeholder, image, errorMessage, register }: LoginInputProps) {
  return (
    <label htmlFor={label} className=" text-white text-sm font-normal "> {label}
      <div className="flex items-center gap-3 bg-none border-2 bg-white border-[#CDCCCC] rounded-[10px] pl-4 cursor-text w-full">
        <img className="h-4 w-4 text-white" src={image} alt={label} />
        <input
          {...register}
          id={label}
          className=" h-12 focus:outline-none rounded-[10px] font-normal text-slate-600"
          type={type}
          placeholder={placeholder}
        />
      {errorMessage && <p>{errorMessage}</p>}
      </div>
    </label>
  );
}
