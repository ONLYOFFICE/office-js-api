# ReviewReportRecordType

Review record type.

## Type

String

## Properties

- "TextAdd" 
- "TextRem" 
- "ParaAdd" 
- "ParaRem" 
- "TextPr" 
- "ParaPr" 
- "Unknown"

## Example

Report on all review changes that contains review records of four different types: "TextRem" - removing text, "TextAdd" - adding text, "ParaRem" - removing a paragraph, "TextPr" - changing text properties.

```javascript
var oReviewReportRecord1 = {Type: "TextRem", Value: "Hello, Mark!", Date: 1679941734161};
var oReviewReportRecord2 = {Type: "TextAdd", Value: "Dear Mr. Pottato.", Date: 1679941736189};
var oReviewReportRecord3 = {Type: "ParaRem", Date: 1679941755942};
var oReviewReportRecord4 = {Type: "TextPr", Date: 1679941757832};
var oReviewRecord = {
	"John Smith" : [oReviewReportRecord1, oReviewReportRecord2],
	"Mark Pottato" : [oReviewReportRecord3, oReviewReportRecord4]
};
```