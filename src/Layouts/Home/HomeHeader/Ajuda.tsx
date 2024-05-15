// AjudaMenu.jsx
import { Link } from "react-router-dom";

interface ComoFuncionaProps {
  isOpen: boolean;
}


const Ajuda = ({ isOpen }:ComoFuncionaProps) => {
  return (
    isOpen && (
      <div>
        <ul>
          <li>
            <Link to="/ajuda-1">Ajuda 1</Link>
          </li>
          <li>
            <Link to="/ajuda-2">Ajuda 2</Link>
          </li>
          {/* Adicione mais opções conforme necessário */}
        </ul>
        
      </div>
    )
  );
};

export default Ajuda;
