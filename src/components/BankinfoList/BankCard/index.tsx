import { MdRemoveCircle } from "react-icons/md";

import { iBankInfo } from "../../../pages/Dashboard";

interface iBankCardProps {
  bankCard: iBankInfo;
  removeBankItem: (bankInfo: iBankInfo) => void;
}

const BankCard = ({ bankCard, removeBankItem }: iBankCardProps) => {
  return (
    <li className={bankCard.valueType}>
      <div>
        <h2>{bankCard.description}</h2>
        <p className="valueType">{bankCard.valueType}</p>
      </div>
      <div>
        <p>R$ {bankCard.value}</p>

        <button onClick={() => removeBankItem(bankCard)}>
          <MdRemoveCircle />
        </button>
      </div>
    </li>
  );
};

export default BankCard;
