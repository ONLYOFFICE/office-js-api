# Copy

Copies the range to the specified range or to the clipboard.

## Syntax

expression.Copy(destination);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | Specifies the new range to which the specified range will be copied. If this argument is omitted, the range will be copied to the clipboard. |

## Returns

This method doesn't return any data.

## Example

This example copies a range to the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is copied to the range A3.");
oRange.Copy(oWorksheet.GetRange("A3"));
```
