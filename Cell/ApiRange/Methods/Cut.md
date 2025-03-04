# Cut

Cuts the range and save it to the clipboard or paste it to the specified range.

## Syntax

```javascript
expression.Cut(destination);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | Specifies the new range to which the cut range will be pasted. If this argument is omitted, the range will be copied to the clipboard. |

## Returns

This method doesn't return any data.

## Example

This example cuts a range to the clipboard.

```javascript editor-xlsx
// How to cut a range.

// Get a range, set some value for it and cut it to the clipboard.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is move to the range A3.");
oRange.Cut(oWorksheet.GetRange("A3"));
```
