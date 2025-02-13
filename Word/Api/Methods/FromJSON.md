# FromJSON

Converts the specified JSON object into the Document Builder object of the corresponding type.

## Syntax

```javascript
expression.FromJSON(message);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| message | Required | JSON |  | The JSON object to convert. |

## Returns

This method doesn't return any data.

## Example

This example transforms paragraph to JSON then restore it from JSON.

```javascript
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);
```
