import React from "react";
import { StyledBankFilter } from "./style";

interface iBankFilterProps {
  setBankFilter: (filter: string) => void;
  bankFilter: string;
}

const BankFilter = ({ setBankFilter, bankFilter }: iBankFilterProps) => {
  return (
    <StyledBankFilter>
      <button
        className={bankFilter === "" ? "selected" : ""}
        onClick={() => {
          setBankFilter("");
        }}
      >
        All
      </button>
      <button
        className={bankFilter === "Gain" ? "selected" : ""}
        onClick={() => {
          setBankFilter("Gain");
        }}
      >
        Gains
      </button>
      <button
        className={bankFilter === "Expense" ? "selected" : ""}
        onClick={() => {
          setBankFilter("Expense");
        }}
      >
        Expenses
      </button>
    </StyledBankFilter>
  );
};

export default BankFilter;
