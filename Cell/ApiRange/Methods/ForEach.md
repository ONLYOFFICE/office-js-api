# ForEach

Executes a provided function once for each cell.

## Syntax

expression.ForEach(fCallback);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| fCallback | Required | Function | A function which will be executed for each cell. |

## Returns

This method doesn't return any data.

## Example

This example executes a provided function once for each cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var oRange = oWorksheet.GetRange("A1:C1");
oRange.ForEach(function (range) {
	var sValue = range.GetValue();
	if (sValue != "1") {
		range.SetBold(true);
	}
});
builder.SaveFile("xlsx", "ForEach.xlsx");
builder.CloseFile();
```