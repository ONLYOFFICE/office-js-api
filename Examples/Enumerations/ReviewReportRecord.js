// Report on all review changes that contains two review records for every user.
let reviewReportRecord1 = {Type: "TextRem", Value: "Hello, Mark!", Date: 1679941734161};
let reviewReportRecord2 = {Type: "TextAdd", Value: "Dear Mr. Pottato.", Date: 1679941736189};
let reviewReportRecord3 = {Type: "ParaRem", Date: 1679941755942};
let reviewReportRecord4 = {Type: "TextPr", Date: 1679941757832};
let reviewRecord = {
	"John Smith" : [reviewReportRecord1, reviewReportRecord2],
	"Mark Pottato" : [reviewReportRecord3, reviewReportRecord4]
};