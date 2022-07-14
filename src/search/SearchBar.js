import React, { useEffect, useRef, useState } from "react";
import { SuggestionList } from "./SuggestionList";
import { auto_complete } from "../fakeAPI/autoComplete";
import { useFocusOutsideHandler } from "./useFocusOutsideHandler";
import { Icon, InputBar, ListBG, SearchWrapper, TermInput } from "./SearchBar.style";

export const SearchBar = ( { searchHandler } ) => {
	const [hasFocus, setHasFocus]       = useState (false);
	const [searchTerm, setSearchTerm]   = useState ("");
	const [suggestions, setSuggestions] = useState ([]);
	const suggestionHistory             = useRef ([]);
	
	// typing and focus
	const focusHandler = () => setHasFocus (true);
	const blurHandler  = () => setHasFocus (false);
	
	const wrapperRef = useRef (null);
	useFocusOutsideHandler (wrapperRef, blurHandler);
	
	const typeHandler = evt => {
		setSearchTerm (evt.target.value);
	};
	
	// Suggestions (start)
	const itemMaker = ( id, term ) => ( {
		id, term, isHistoryItem: suggestionHistory.current.includes (id)
	} )
	
	const updateSuggestions = ( id, term ) => setSuggestions (
		prevState => prevState.map (item => item.id === id ? itemMaker (id, term) : item)
	);
	
	useEffect (() => {
		const getSuggestions = async () => {
			if ( searchTerm.length < 1 ) {
				setSuggestions ([]);
			} else {
				const result = await ( auto_complete (searchTerm) );
				setSuggestions (
					result.slice (0, 10)
					.map (item => ( { ...item, isHistoryItem: suggestionHistory.current.includes (item.id) } ))
				);
			}
		}
		
		getSuggestions ();
	}, [searchTerm]);
	
	const selectTermHandler = ( id, term ) => {
		if ( !suggestionHistory.current.includes (id) ) {
			suggestionHistory.current = [...suggestionHistory.current, id];
		}
		updateSuggestions (id, term);
		setSearchTerm (term);
		startSearchHandler ();
	};
	
	const historyPurgeHandler = ( id, term ) => {
		suggestionHistory.current = suggestionHistory.current.filter (entry => entry !== id);
		updateSuggestions (id, term);
	}
	// Suggestions (end)
	
	// do the search
	const startSearchHandler = () => {
		setHasFocus (false);
		searchHandler (searchTerm);
	};
	
	useEffect (() => {
		const listener = event => {
			if ( event.code === "Enter" || event.code === "NumpadEnter" ) {
				event.preventDefault ();
				startSearchHandler ();
			}
		};
		document.addEventListener ("keydown", listener);
		return () => {
			document.removeEventListener ("keydown", listener);
		};
	}, [startSearchHandler]);
	
	return (
		<SearchWrapper
			ref={ wrapperRef }>
			
			<ListBG hasFocus={ hasFocus } itemNum={ suggestions.length }>
				
				<InputBar>
					{ hasFocus && <Icon/> }
					<TermInput
						onFocus={ focusHandler }
						autoFocus
						type="text"
						onChange={ typeHandler }
						value={ searchTerm }
						hasList={ hasFocus }
						placeholder="Write search term here"/>
				</InputBar>
				{ hasFocus &&
				  Boolean (suggestions.length) &&
				  <SuggestionList suggestions={ suggestions }
								  selectTermHandler={ selectTermHandler }
								  historyPurgeHandler={ historyPurgeHandler }/> }
			</ListBG>
		</SearchWrapper>
	);
};