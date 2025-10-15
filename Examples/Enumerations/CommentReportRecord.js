// This example shows a record of one comment from the comment report.

// Report on all comments that contains two comments from each user.

// How to get comment report records.

const oCommentReportRecord1 = {
	"IsAnswer": false,
	"CommentMessage": "Good text",
	"Date": 1688588002698,
	"DateUTC": 1688570002698,
	"QuoteText": "Some text"
};
const oCommentReportRecord2 = {
	"IsAnswer": true,
	"CommentMessage": "I don't think so",
	"Date": 1688588012661,
	"DateUTC": 1688570012661
};
const oCommentReportRecord3 = {
	"IsAnswer": false,
	"CommentMessage": "Need to change this part",
	"Date": 1688587967245,
	"DateUTC": 1688569967245,
	"QuoteText": "The quick brown fox jumps over the lazy dog"
};
const oCommentReportRecord4 = {
	"IsAnswer": false,
	"CommentMessage": "We need to add a link",
	"Date": 1688587967245,
	"DateUTC": 1688569967245,
	"QuoteText": "OnlyOffice"
};

const oCommentReport = {
	"John Smith": [oCommentReportRecord1, oCommentReportRecord2],
	"Mark Pottato": [oCommentReportRecord3, oCommentReportRecord4]
};
