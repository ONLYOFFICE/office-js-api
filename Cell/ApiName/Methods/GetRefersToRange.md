# GetRefersToRange

Returns the ApiRange object by its name.

## Syntax

```javascript
expression.GetRefersToRange();
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object by its name.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "$A$1:$B$1");
let defName = Api.GetDefName("numbers");
let range = defName.GetRefersToRange();
range.SetBold(true);
```
