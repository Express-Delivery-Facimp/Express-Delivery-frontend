import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "whiteNred" | "redNwhite" | "searchButton" |"default";
  defaultstyle?: string;
}

export const Button = (props: ButtonProps) => {
  const { variant } = props;

  const style = "rounded-lg font-normal border-[1px] border-red-500 hover:bg-opacity-75 hover:text-opacity-75 active:bg-opacity-95 active:text-opacity-95";

  switch (variant) {
    case "whiteNred":
      return <WhiteNRedButton defaultstyle={style} {...props} />;
    case "redNwhite":
      return <RedNWhiteButton defaultstyle={style} {...props} />;
    case "searchButton":
      return <SearchButton defaultstyle={style} {...props} />;
    default:
      return <DefaultButton defaultstyle={style} {...props} />;
  }
};

export const DefaultButton = (props: ButtonProps) => {
  const { children, defaultstyle } = props;

  return (
    <button {...props} className={`${defaultstyle}`}>
      <span>{children}</span>
    </button>
  );
};

export const WhiteNRedButton = (props: ButtonProps) => {
  const { children, defaultstyle } = props;

  return (
    <button {...props} className={`${defaultstyle} h-16 w-28 text-[#DD1818] bg-none`}>
      <span>{children}</span>
    </button>
  );
};
export const RedNWhiteButton = (props: ButtonProps) => {
  const { children, defaultstyle } = props;

  return (
    <button {...props} className={`${defaultstyle} h-16 w-28 text-[#FFFBFB] bg-[#F83C3C]`}>
      <span>{children}</span>
    </button>
  );
};
export const SearchButton = (props: ButtonProps) => {
  const { children, defaultstyle } = props;

  return (
    <button {...props} className={`${defaultstyle} w-40 h-12 bg-[#DD2F2F] text-2xl text-[#FFFDFD]`}>
      <span>{children}</span>
    </button>
  );
};
