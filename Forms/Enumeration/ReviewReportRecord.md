# ReviewReportRecord

Represents a single review change record.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Type | [ReviewReportRecordType](../Enumeration/ReviewReportRecordType.md) | Review record type. |
| Value | string | Review change value (only for "TextAdd" and "TextRem" types). |
| Date | number | Timestamp of when the change was made. |
| ReviewedElement | [ApiParagraph](../../Word/ApiParagraph/ApiParagraph.md) \| [ApiTable](../../Word/ApiTable/ApiTable.md) | The element that was reviewed. |
