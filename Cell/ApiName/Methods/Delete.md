# Delete

Deletes the DefName object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example deletes the DefName object.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
defName.Delete();
worksheet.GetRange("A3").SetValue("The name 'numbers' of the range A1:B1 was deleted.");
```
