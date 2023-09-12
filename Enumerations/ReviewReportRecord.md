# ReviewReportRecord

Record of one review change.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| Type | Required | [ReviewReportRecordType](./ReviewReportRecordType.md) | Review record type. |
| Value | Optional | String | Review change value that is set for the "TextAdd" and "TextRem" types only. Default value is "undefined". |
| Date | Required | Number | The time when this change was made. |

## Example

Report on all review changes that contains two review records for every user.

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