import styled from "styled-components";
import { ResultItem } from "./ResultItem";

const ResultPage = styled.section`
  text-align: left;
`;

const margin   = 180;
const MetaData = styled.p`
  color: darkgray;
  margin-left: ${ margin }px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Google Sans, arial, sans-serif;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 8px;
`;

const List = styled.ul`
  width: 650px;
  margin-left: ${ margin }px;
  padding: 0;
  list-style: none;
`;

const Result = ( { searchResult } ) => {
	const { time, result, total } = searchResult;
	
	return (
		<ResultPage>
			<MetaData>{ `${ total } result (${ time / 1000 } seconds)` }</MetaData>
			<List>
				{ result.map (item => <ResultItem key={ item.id } { ...item } />) }
			</List>
		</ResultPage>
	);
};

export { Result };