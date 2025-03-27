# GetPageOrientation

Returns the page orientation.

## Syntax

```javascript
expression.GetPageOrientation();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PageOrientation](../../Enumeration/PageOrientation.md)

## Example

This example shows how to get the page orientation.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
