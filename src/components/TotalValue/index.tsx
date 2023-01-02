import React from "react";
import { iBankInfo } from "../../pages/Dashboard";

import { StyledTotalValue } from "./style";

interface iTotalvalueProps {
  bankInfoList: iBankInfo[];
}
const TotalValue = ({ bankInfoList }: iTotalvalueProps) => {
  return (
    <StyledTotalValue>
      <h3>Total value:</h3>{" "}
      <p>
        ${" "}
        {bankInfoList.reduce(
          (previousValue, currentValue) =>
            currentValue.valueType === "Gain"
              ? Number(currentValue.value) + Number(previousValue)
              : Number(previousValue) - Number(currentValue.value),
          0
        )}
      </p>
    </StyledTotalValue>
  );
};

export default TotalValue;
