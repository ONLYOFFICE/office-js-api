# GetRange

Returns a Range object that represents the document part contained in the specified range.

## Syntax

expression.GetRange(Start, End);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Optional | Number | false | Start character index in the current range. |
| End | Optional | Number | -1 | End character index in the current range (if <= 0, then the range is taken to the end). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)