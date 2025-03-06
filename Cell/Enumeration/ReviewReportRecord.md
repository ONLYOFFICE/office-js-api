# ReviewReportRecord

Represents a single review change record.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Date | number | Timestamp of when the change was made. |
| ReviewedElement | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| ApiTable | The element that was reviewed. |
| Type | [ReviewReportRecordType](../Enumeration/ReviewReportRecordType.md) | Review record type. |
| Value | string | Review change value (only for "TextAdd" and "TextRem" types). |
