
export default function RegisterButton() {
  return (
    <div className="flex items-center justify-center mt-5" data-testid='container-register'>
      <button
        type="submit"
        className="h-8 rounded-[10px] text-white bg-[#DC1B1B] w-full mr-5 font-medium text-sm py-5 flex items-center justify-center hover:opacity-80"
        data-testid='button-register'
      >
        Cadastrar
      </button>
    </div>
  )
}
