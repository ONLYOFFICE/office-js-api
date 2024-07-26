# GetRange

Returns a Range object that represents the document part contained in the specified hyperlink.

## Syntax

expression.GetRange(Start, End);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start character index in the current element. |
| End | Required | Number |  | End character index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)