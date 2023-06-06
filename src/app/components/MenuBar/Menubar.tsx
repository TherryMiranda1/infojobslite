import { useOffersContext } from "@/app/context/offersContext";
import React from "react";
import { MenubarStyled } from "./Menubar.styled";
import InputText from "../Inputs/Text/InputText";
import { cleanText } from "@/app/utils/cleanText";

type Props = {};

const Menubar = (props: Props) => {
  const { params, setParams, getInfoJobsOffers, selectedFilter } =
    useOffersContext();
  return (
    <MenubarStyled opacity={selectedFilter ? 0 : 1}>
      <InputText
        onChange={(e) => setParams({ ...params, ["q"]: e })}
        placeholder={"Puesto, empresa o palabra clave"}
        buttonOnClick={() =>
          getInfoJobsOffers(false, { q: cleanText(params.q?.toString()) })
        }
        value={params.q?.toString()}
      />
    </MenubarStyled>
  );
};

export default Menubar;
