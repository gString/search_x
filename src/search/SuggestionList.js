import { memo } from "react";
import styled from "styled-components";
import { Icon } from "./SearchBar.style";

const Suggestions = styled.ul`
  list-style: none;
  text-align: left;
  margin-top: 20px;
  padding-left: 50px;
`;

const ListItem = styled.li`
  padding: 5px;
  margin: 0 20px 5px 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${ Icon } {
    left: -30px;
  }
`;

const Text = styled.span`
  cursor: pointer;
  ${ ( { isHistoryItem } ) => {
    if ( isHistoryItem ) {
      return `
  color: rebeccapurple;
`
    }
  } }`;
const Suggestion = memo (( { selectHandler, removeHandler, id, term, isHistoryItem } ) => {
	const suggestionClickHandler = () => selectHandler (id, term);
	const removeClickHandler     = () => removeHandler (id, term);
	
	return (
		<ListItem><Icon/><Text isHistoryItem={isHistoryItem} onClick={ suggestionClickHandler }>{ term }</Text>{ isHistoryItem && <Text
			onClick={ removeClickHandler }>remove</Text> }</ListItem>
	);
});

const SuggestionList = ( { suggestions, selectTermHandler, historyPurgeHandler } ) => {
	return (
		<Suggestions>{ suggestions.map (suggestion => <Suggestion { ...suggestion }
																  key={ suggestion.id }
																  selectHandler={ selectTermHandler }
																  removeHandler={ historyPurgeHandler }
		/>) }</Suggestions>
	);
};

export { SuggestionList };