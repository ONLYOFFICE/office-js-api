# ReviewReportRecord

Record of one review change.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Type | [ReviewReportRecordType](../Enumeration/ReviewReportRecordType.md) | Review record type. |
| Value | string | Review change value that is set for the "TextAdd" and "TextRem" types only. |
| Date | number | The time when this change was made. |
| ReviewedElement | ApiParagraph \| ApiTable | Element that has been reviewed. |


## Example

Report on all review changes that contains two review records for every user.

```javascript editor-pdf
let reviewReportRecord1 = {Type: "TextRem", Value: "Hello, Mark!", Date: 1679941734161};
let reviewReportRecord2 = {Type: "TextAdd", Value: "Dear Mr. Pottato.", Date: 1679941736189};
let reviewReportRecord3 = {Type: "ParaRem", Date: 1679941755942};
let reviewReportRecord4 = {Type: "TextPr", Date: 1679941757832};
let reviewRecord = {
	"John Smith" : [reviewReportRecord1, reviewReportRecord2],
	"Mark Pottato" : [reviewReportRecord3, reviewReportRecord4]
};
```
