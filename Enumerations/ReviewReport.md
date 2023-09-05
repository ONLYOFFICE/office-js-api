# ReviewReport

Report on all review changes. This is a dictionary where the keys are usernames.

## Type

Object<String: Array<[ReviewReportRecord](./ReviewReportRecord.md)>>

## Example

Report on all review changes.

```javascript
var oReviewRecord = {
	"John Smith" : [{Type: "TextRem", Value: "Hello, Mark!", Date: 1679941734161},
					{Type: "TextAdd", Value: "Dear Mr. Pottato.", Date: 1679941736189}],
	"Mark Pottato" : [{Type: "ParaRem", Date: 1679941755942},
					{Type: "TextPr", Date: 1679941757832}]
}
```