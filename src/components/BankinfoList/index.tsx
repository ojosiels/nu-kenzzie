import React from "react";

import BankCard from "./BankCard";
import { StyledBankList, StyledEmptyBankList } from "./style";

import { iBankInfo } from "../../pages/Dashboard";

interface iBankInfoListProps {
  bankInfoList: iBankInfo[];
  removeBankItem: (bankInfo: iBankInfo) => void;
}

const BankInfoList = ({ bankInfoList, removeBankItem }: iBankInfoListProps) => {
  return bankInfoList.length ? (
    <StyledBankList className="bankInfoList">
      {bankInfoList.map((bankCard, index) => (
        <BankCard
          key={index}
          bankCard={bankCard}
          removeBankItem={removeBankItem}
        />
      ))}
    </StyledBankList>
  ) : (
    <StyledEmptyBankList>
      <h2>Insert your Expenses and Gains and they are gonna show up here</h2>
    </StyledEmptyBankList>
  );
};

export default BankInfoList;
