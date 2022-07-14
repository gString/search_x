import { useState } from "react";
import { SearchBar } from "./search/SearchBar";
import { search_result } from "./fakeAPI/serachResult";
import { Result } from "./result/Result";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.h1`
  padding: 10px 30px;
`;

function App () {
	const [searchResult, setSearchResult] = useState (null);
	
	const searchHandler = async searchTerm => {
		if ( searchTerm.length > 0 ) {
			setSearchResult (null);
			const result = await ( search_result (searchTerm) );
			setSearchResult (result);
		}
	};
	
	return (
		<div className="App">
			<Header>
				<Logo>Search X</Logo>
				<SearchBar searchHandler={ searchHandler }/>
			</Header>
			{ searchResult && <Result searchResult={ searchResult }/> }
		</div>
	);
}

export default App;