# Insert

Inserts a string replacing the specified characters.

## Syntax

expression.Insert(String);

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| String | Required | String | The string to insert. |

## Returns

This method doesn't return any data.

## Example

This example inserts a string replacing the specified characters.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.Insert("string");
builder.SaveFile("xlsx", "Insert.xlsx");
builder.CloseFile();
```