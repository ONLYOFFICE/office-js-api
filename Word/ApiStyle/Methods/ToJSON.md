# ToJSON

Converts the ApiStyle object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings);
```

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
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let json = tableStyle.ToJSON(false);
let styleFromJSON = Api.FromJSON(json);
styleFromJSON.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(styleFromJSON);
doc.Push(table);
```
