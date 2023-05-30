import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import {
  ButtonStyled,
  CloseButon,
  FilterCardStyled,
  FiltersBarStyled,
  FiltersContainer,
  ItemsContainer,
  SelectionCardStyled,
} from "./FiltersBar.styled";
import { allFilters } from "@/app/static/constants/allFilters";

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

export const FilterCard = ({
  filter,
  setSelectedFilter,
  selectedFilter,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <FilterCardStyled key={filter.query}>
      <ButtonStyled onClick={() => setSelectedFilter(filter)}>
        {filter.title}
      </ButtonStyled>
    </FilterCardStyled>
  );
};

const FiltersBar = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    undefined
  );
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
        <SelectionCardStyled>
          <CloseButon onClick={() => setSelectedFilter(undefined)}>
            <RiCloseFill size={24} />
          </CloseButon>
          <h3>Elige {selectedFilter?.title}</h3>
          <ItemsContainer>
            {selectedFilter?.items?.map((item: any) => (
              <FilterCardStyled
                key={selectedFilter?.type === "string" ? item : item.id}
              >
                <ButtonStyled onClick={() => setSelectedFilter(item)}>
                  {selectedFilter?.type === "string" ? item : item.value}
                </ButtonStyled>
              </FilterCardStyled>
            ))}
          </ItemsContainer>
        </SelectionCardStyled>
      )}
    </FiltersContainer>
  );
};

export default FiltersBar;
