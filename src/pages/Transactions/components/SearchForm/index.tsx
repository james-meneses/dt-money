import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer, SearchButton, SearchInput } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchInput type="text" placeholder="Buscar transações" />
      <SearchButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </SearchFormContainer>
  );
}
