# GetClassType

Returns a type of the ApiRange class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"range"

## Example

This example gets a class type and inserts it into the table.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);
```
