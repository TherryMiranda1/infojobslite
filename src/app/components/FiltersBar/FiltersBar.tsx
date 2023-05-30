import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import {
  BackdropStyled,
  ButtonStyled,
  ButtonStyledDark,
  CloseButton,
  FilterCardStyled,
  FiltersBarStyled,
  FiltersContainer,
  ItemsContainer,
  RemoveButton,
  SelectionCardStyled,
} from "./FiltersBar.styled";
import { allFilters } from "@/app/static/constants/allFilters";
import { useOffersContext } from "@/app/context/offersContext";
import InputText from "../Inputs/Text/InputText";
import { uppercaser } from "@/app/utils";

interface FilterItem {
  id: number;
  value: string;
  order: number;
  key: string;
  parent?: number;
}
interface Filter {
  query: string;
  title: string;
  type: string;
  items: any;
}

type Props = {
  filter: Filter;
  setSelectedFilter: (filter?: Filter) => void;
  selectedFilter?: Filter;
};

export const FilterCard = ({ filter, setSelectedFilter }: Props) => {
  const { params, setParams } = useOffersContext();

  return (
    <FilterCardStyled key={filter.query}>
      {Boolean(params[filter.query]) ? (
        <ButtonStyledDark onClick={() => setSelectedFilter(filter)}>
          <p>{uppercaser(`${params[filter.query]}`)}</p>
          <RemoveButton
            onClick={(e) => {
              setParams({ ...params, [filter.query]: undefined });
              e.stopPropagation();
            }}
          >
            <RiCloseFill size={18} />
          </RemoveButton>
        </ButtonStyledDark>
      ) : (
        <ButtonStyled onClick={() => setSelectedFilter(filter)}>
          {filter.title}
        </ButtonStyled>
      )}
    </FilterCardStyled>
  );
};

const FiltersBar = () => {
  const { params, setParams } = useOffersContext();

  const [searchItemsText, setSearchItemsText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    undefined
  );

  const filteredItems = (selectedFilter: Filter) => {
    const { items, type } = selectedFilter;
    if (searchItemsText.length === 0) {
      return items;
    }
    return type === "string"
      ? items?.filter((item: string) =>
          item.toLowerCase().includes(searchItemsText.toLowerCase())
        )
      : items?.filter((item: FilterItem) =>
          item.value.toLowerCase().includes(searchItemsText.toLowerCase())
        );
  };

  const handleSelect = (filter: string) => {
    selectedFilter && setParams({ ...params, [selectedFilter.query]: filter });
    setSelectedFilter(undefined);
    setSearchItemsText("");
  };
  console.log(selectedFilter);

  return (
    <FiltersContainer>
      <FiltersBarStyled>
        {allFilters.map((filter) => (
          <FilterCard
            filter={filter}
            key={filter.query}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
      </FiltersBarStyled>
      {selectedFilter && (
        <BackdropStyled>
          <SelectionCardStyled>
            <CloseButton
              onClick={() => {
                setSelectedFilter(undefined);
                setSearchItemsText("");
              }}
            >
              <RiCloseFill size={24} />
            </CloseButton>
            <h4>Elige {selectedFilter.title}</h4>
            {selectedFilter.items.length > 10 && (
              <InputText
                onChange={(e) => setSearchItemsText(e)}
                placeholder={selectedFilter.title}
              />
            )}
            <ItemsContainer>
              {filteredItems(selectedFilter)?.map((item: any) => (
                <FilterCardStyled
                  key={selectedFilter?.type === "string" ? item : item.id}
                >
                  <ButtonStyled
                    onClick={() =>
                      handleSelect(
                        selectedFilter?.type === "string" ? item : item.key
                      )
                    }
                  >
                    {selectedFilter?.type === "string"
                      ? item.replaceAll("_", " ")
                      : item.value}
                  </ButtonStyled>
                </FilterCardStyled>
              ))}
            </ItemsContainer>
          </SelectionCardStyled>
        </BackdropStyled>
      )}
    </FiltersContainer>
  );
};

export default FiltersBar;
