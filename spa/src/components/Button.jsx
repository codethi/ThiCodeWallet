/* eslint-disable react/prop-types */
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Button({ text, type, icon, transaction }) {
  let IconComponent;
  const navigate = useNavigate();

  if (icon === "plus") IconComponent = BiPlusCircle;
  if (icon === "minus") IconComponent = BiMinusCircle;

  return (
    <button
      type={type}
      className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-cyan-400 to-blue-700 flex items-center justify-center gap-2"
      onClick={() => transaction && navigate(`/transaction/${transaction}`)}
    >
      {IconComponent && <IconComponent />} {text}
    </button>
  );
}
