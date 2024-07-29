# ToJSON

Converts the ApiStyle object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings);

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiStyle object into the JSON object.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
var json = oTableStyle.ToJSON(false);
var oStyleFromJSON = Api.FromJSON(json);
oStyleFromJSON.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oStyleFromJSON);
oDocument.Push(oTable);
```
