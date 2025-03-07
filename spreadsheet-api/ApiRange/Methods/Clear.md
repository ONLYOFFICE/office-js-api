# Clear

Clears the current range.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears the range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
