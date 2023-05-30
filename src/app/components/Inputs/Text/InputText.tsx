import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  ButtonSearchStyled,
  InputTextContainer,
  InputTextStyled,
} from "./InputText.styled";

interface Props {
  label?: string;
  placeholder?: string;
  onChange: (e: string) => void;
  required?: boolean;
  isPassword?: boolean;
  value?: string;
  buttonOnClick?: () => void;
}
const InputText = ({
  label,
  placeholder,
  onChange,
  required,
  isPassword,
  value,
  buttonOnClick,
}: Props): JSX.Element => {
  return (
    <InputTextContainer>
      {label && <label>{label}</label>}
      <InputTextStyled
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        value={value}
      />
      {buttonOnClick && (
        <ButtonSearchStyled
          onClick={(e) => {
            e.preventDefault();
            buttonOnClick();
          }}
        >
          <BiSearchAlt size={24} />
        </ButtonSearchStyled>
      )}
    </InputTextContainer>
  );
};

export default InputText;
