import { BreadCrumbs, Date, Description, ExtraLink, Item, MainLink, Title } from "./ResultItem.style";

const ResultItem = ( { created, created2, pageTitle, link, link2, page1, page2, desc, header } ) => {
	
	const withDate      = Boolean (Math.round (Math.random ()));
	const withExtraLink = Boolean (Math.round (Math.random ()));
	
	return (
		<Item>
			<MainLink href={ link }>
				<Title>{ pageTitle }</Title>
				<BreadCrumbs>{ link }<span> > { page1 } > { page2 }</span></BreadCrumbs>
			</MainLink>
			<Description>{ withDate && <Date>{ created.toDateString () } - </Date> }{ desc }</Description>
			{ withExtraLink &&
			  <ExtraLink><a href={ link2 }>{ header }</a><Date>{ created2.toDateString () }  </Date></ExtraLink> }
		</Item>
	);
};

export { ResultItem };