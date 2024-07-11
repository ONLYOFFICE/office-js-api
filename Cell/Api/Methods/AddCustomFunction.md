# AddCustomFunction

Creates a new custom function.

## Syntax

expression.AddCustomFunction(fCustom);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| fCustom | Required | Function | A new function for calculating. |

## Returns

This method doesn't return any data.

## Example

This example calculates custom function result.

```javascript
builder.CreateFile("xlsx");
Api.AddCustomFunction(function ADD(first, second) {
    return first + second;
})
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange('A1').SetValue('=ADD(1,2)');
builder.SaveFile("xlsx", "AddCustomFunction.xlsx");
builder.CloseFile();
```