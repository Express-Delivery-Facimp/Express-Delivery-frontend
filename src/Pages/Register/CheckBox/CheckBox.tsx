import { UseFormRegisterReturn } from "react-hook-form";

interface CheckBoxProps{
  register: UseFormRegisterReturn;
  errorMessage?: string | null;
}

export default function CheckBox({register, errorMessage}:CheckBoxProps) {
  return (
    <div className=" flex flex-col gap-1 ">
        <div className="flex justify-start items-start mt-3 gap-2 text-sm text-black font-medium">
          <input type="checkbox" {...register}/>
            <p>
            Li e concordo com os <span className="text-red-600">Termos e Condições de uso.</span>
            <br />
            Os termos estarão disponíveis para consulta
            <br />
            dentro do app.
          </p>
        </div>
          {errorMessage && <span className=" text-rose-500 text-md font-medium">{errorMessage}</span>}
      </div>
  )
}
