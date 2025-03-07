# GetName

Returns a type of the ApiName class.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a type of the ApiName class.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("Name: " + defName.GetName());
```
