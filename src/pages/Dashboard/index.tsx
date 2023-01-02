import React, { useState, useEffect } from "react";

import AddBankInfoForm from "../../components/AddBankInfoForm";
import Totalvalue from "../../components/TotalValue";
import BankFilter from "../../components/BankFilter";
import BankInfoList from "../../components/BankinfoList";
import Header from "../../components/Header";
import { StyledDashboardPage } from "./style";

export interface iBankInfo {
  valueType: string;
  description: string;
  value: string;
}

const DashboardPage = () => {
  const [bankInfoList, setBankList] = useState<iBankInfo[]>([]);

  const [bankFilter, setBankFilter] = useState("");

  const newBankInfoList = bankInfoList.filter((bankInfo: iBankInfo) =>
    bankFilter === "" ? true : bankInfo.valueType === bankFilter
  );

  const addBankInfo = ({
    value,
    valueType = "Gain",
    description,
  }: iBankInfo) => {
    setBankList([...bankInfoList, { value, valueType, description }]);

    localStorage.setItem(
      "savedBankInfo",
      JSON.stringify([...bankInfoList, { value, valueType, description }])
    );
  };

  const removeBankItem = (clickedItem: iBankInfo) => {
    const bankInfoListRemovedItem = bankInfoList.filter(
      (item) => item !== clickedItem
    );
    setBankList(bankInfoListRemovedItem);
    localStorage.setItem(
      "savedBankInfo",
      JSON.stringify(bankInfoListRemovedItem)
    );
  };

  useEffect(() => {
    const savedBankInfo = localStorage.getItem("savedBankInfo");
    if (savedBankInfo) {
      setBankList(JSON.parse(savedBankInfo));
    }
  }, []);

  return (
    <StyledDashboardPage>
      <Header />
      <main>
        <div>
          <AddBankInfoForm addBankInfo={addBankInfo} />

          {bankInfoList.length ? (
            <Totalvalue bankInfoList={bankInfoList} />
          ) : (
            ""
          )}
        </div>
        <div className="bankInfoList">
          <div>
            <p>Resumo Financeiro</p>
            <BankFilter setBankFilter={setBankFilter} bankFilter={bankFilter} />
          </div>
          <BankInfoList
            bankInfoList={newBankInfoList}
            removeBankItem={removeBankItem}
          />
        </div>
      </main>
    </StyledDashboardPage>
  );
};
export default DashboardPage;
