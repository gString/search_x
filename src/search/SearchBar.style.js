import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

const barHeight = 50;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  width: 50vw;
  height: ${ barHeight }px;
  position: relative;
`

export const ListBG = styled.div`
  border-radius: ${ barHeight / 2 }px;
  box-shadow: 1px 1px 4px 2px rgba(99, 99, 99, 0.1);
  border: 1px solid lightgrey;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  z-index: 1;
  
  ${ ( { hasFocus } ) => {
    if ( hasFocus ) {
      return `
		left: -20px;
		right: -20px;
		`
    }}}
  
  ${ ( { hasFocus, itemNum } ) => {
    if ( hasFocus && itemNum ) {
      return `
		left: -20px;
		right: -20px;
		bottom: -${20 + itemNum * 33}px;
		`
    }}}
`;

export const Icon = styled (SearchIcon)`
  opacity: .3;
  height: 20px;
  width: 20px;
  position: absolute;
`;

export const InputBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  height: 30px;

  ${ ( { hasList } ) => {
  if ( hasList ) {
    return `
    margin-left: 40px;
`
  }}}
`;

export const TermInput = styled.input`
  outline: none;
  border: none;
  margin: 0 10px;
  padding: 5px;
  width: 90%;

  ${ ( { hasList } ) => {
  if ( hasList ) {
    return `
        margin-left: 30px;
        padding-top: 7px;
`
  }}}
`;
