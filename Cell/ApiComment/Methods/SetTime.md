# SetTime

Sets the timestamp of the comment creation in the current time zone format.

## Syntax

expression.SetTime(nTimeStamp);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number | String |  | The timestamp of the comment creation in the current time zone format. |

## Returns

This method doesn't return any data.

## Example

This example sets the timestamp of the comment creation in the current time zone format.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Timestamp: ");
oComment.SetTime(Date.now());
oWorksheet.GetRange("B3").SetValue(oComment.GetTime());
```
