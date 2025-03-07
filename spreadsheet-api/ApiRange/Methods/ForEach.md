# ForEach

Executes a provided function once for each cell.

## Syntax

```javascript
expression.ForEach(fCallback);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fCallback | Required | function |  | A function which will be executed for each cell. |

## Returns

This method doesn't return any data.

## Example

This example executes a provided function once for each cell.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let range = worksheet.GetRange("A1:C1");
range.ForEach(function (range) {
	let value = range.GetValue();
	if (value != "1") {
		range.SetBold(true);
	}
});
```
