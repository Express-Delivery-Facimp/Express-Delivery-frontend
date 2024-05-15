import { Link } from "react-router-dom";

interface ComoFuncionaProps {
  isOpen: boolean;
}

const ComoFunciona = ({ isOpen }:ComoFuncionaProps) => {
  return (
    isOpen && (
      <div className="">
        <ul>
          <li>
            <Link to="/funcionalidade-1">Funcionalidade 1</Link>
          </li>
          <li>
            <Link to="/funcionalidade-2">Funcionalidade 2</Link>
          </li>
          {/* Adicione mais opções conforme necessário */}
        </ul>
        
      </div>
    )
  );
};

export default ComoFunciona;