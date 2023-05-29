import { useOffersContext } from "@/app/context/offersContext";
import React from "react";
import { MenubarStyled } from "./Menubar.styled";
import InputText from "../Inputs/Text/InputText";
import { cleanText } from "@/app/utils/cleanText";

type Props = {};

const Menubar = (props: Props) => {
  const { searchText, setSearchText, getInfoJobsOffers } = useOffersContext();
  return (
    <MenubarStyled>
      <InputText
        onChange={(e) => setSearchText(e)}
        placeholder={"Puesto, empresa o palabra clave"}
        buttonOnClick={() =>
          getInfoJobsOffers(false, { q: cleanText(searchText) })
        }
        value={searchText}
      />
    </MenubarStyled>
  );
};

export default Menubar;
