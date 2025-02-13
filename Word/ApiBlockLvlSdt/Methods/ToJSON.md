# ToJSON

Converts the ApiBlockLvlSdt object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiBlockLvlSdt object into the JSON object.

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetAlias("№1");
let json = blockLvlSdt.ToJSON(false, true);
let blockLvlSdtFromJSON = Api.FromJSON(json);
blockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdtFromJSON);
```
