import magnifying from "../../../assets/icons/magnifying-glassHome.svg";

interface SearchFieldProps{
  placeholder: string;
}

export default function SearchField( {placeholder}:SearchFieldProps ){
  return (
    <label htmlFor="searchInput" className=" w-full" data-testid="label-search">
      <div className="flex items-center w-full gap-3 bg-none border-2 border-[#CDCCCC] rounded-[10px] pl-4 cursor-text bg-[#FFFBFB]">
        <img className="h-6 w-6" src={magnifying} alt="magnifying-glass" data-testid="img-search" />
        <input
          id="searchInput"
          className="w-full h-12 focus:outline-none rounded-[10px] font-medium text-xl text-[#CDCCCC] "
          type="search"
          name="search"
          minLength={1}
          required
          placeholder={placeholder}
          data-testid='input-search'
        />
      </div>
    </label>
  );
}
