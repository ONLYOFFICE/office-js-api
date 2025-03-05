# SetName

Sets a string value representing the object name.

## Syntax

```javascript
expression.SetName(sName);
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | New name for the range. |

## Returns

boolean

## Example

This example sets a string value representing the object name.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("name", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("name");
defName.SetName("new_name");
let newDefName = Api.GetDefName("new_name");
worksheet.GetRange("A3").SetValue("The new name of the range: " + newDefName.GetName());
```
