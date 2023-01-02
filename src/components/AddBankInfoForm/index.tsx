import React, { useState } from "react";
import { iBankInfo } from "../../pages/Dashboard";
import { StyledAddBankInfoForm } from "./style";

interface iAddBankInfoFormProps {
  addBankInfo: (bankInfo: iBankInfo) => void;
}

const AddBankInfoForm = ({ addBankInfo }: iAddBankInfoFormProps) => {
  const [formData, setFormData] = useState<iBankInfo>({} as iBankInfo);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.description && formData.value) {
      addBankInfo(formData);
      setFormData({
        description: "",
        value: "",
        valueType: formData.valueType,
      });
    }
  };

  return (
    <StyledAddBankInfoForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          placeholder="Transaction description"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
      </div>
      <div className="flex">
        <div>
          <label htmlFor="value">Value</label>
          <input
            type="number"
            name="value"
            id="value"
            value={formData.value}
            placeholder={"Transaction value "}
            min={0}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="valueType">Value Type</label>
          <select
            name="valueType"
            id="valueType"
            onChange={(event) =>
              setFormData({ ...formData, valueType: event.target.value })
            }
          >
            <option value="Gain">Gain</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
      </div>

      <button type="submit">
        Add {formData.valueType ? formData.valueType : "Gain"}
      </button>
    </StyledAddBankInfoForm>
  );
};

export default AddBankInfoForm;
