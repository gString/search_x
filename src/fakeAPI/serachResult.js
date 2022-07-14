import { faker } from "@faker-js/faker";

const resultSum = () => 3 + Math.floor(Math.random() * 100);

const item = searchTerm => ({
	"created": faker.date.recent(),
	"created2": faker.date.recent(),
	"pageTitle": faker.company.catchPhrase().concat(" - ", faker.company.catchPhraseAdjective()),
	"link": faker.internet.url(),
	"link2": faker.internet.url(),
	"page1": faker.word.adjective(),
	"page2": faker.word.adjective(),
	"header": faker.company.bs().concat(" ", faker.company.catchPhraseAdjective()),
	"desc": searchTerm.toUpperCase().concat(" ",faker.lorem.paragraph(5)),
	"id": faker.database.mongodbObjectId(),
})

const resultItems = (pageLength, searchTerm) => {
	return Array(pageLength).fill(null).map(x => item(searchTerm));
}

export const search_result = searchTerm => {
	return new Promise((resolve) => {
		resolve(Date.now());
	}).then(date => {
		const resultLength = resultSum();
		const pageLength = resultLength > 10 ? 10 : resultLength;
		const result = resultItems(pageLength, searchTerm);
		return {
			date,
			result,
			total: resultLength,
		}
	}).then(result => {
		const time = Date.now() - result.date + 100;
		return { ...result, time }
	});
}