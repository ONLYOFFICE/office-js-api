# GetRange

Returns a Range object that represents the part of the document contained in the specified table.

## Syntax

expression.GetRange(Start, End);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start character in the current element. |
| End | Required | Number |  | End character in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)