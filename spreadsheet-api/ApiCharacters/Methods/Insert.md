# Insert

Inserts a string replacing the specified characters.

## Syntax

```javascript
expression.Insert(String);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| String | Required | string |  | The string to insert. |

## Returns

This method doesn't return any data.

## Example

This example inserts a string replacing the specified characters.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");
```
