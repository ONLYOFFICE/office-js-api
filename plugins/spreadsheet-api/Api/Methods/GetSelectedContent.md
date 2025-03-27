# GetSelectedContent

Returns the selected content in the specified format.

## Syntax

```javascript
expression.GetSelectedContent(prop);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | Required | object |  | The returned content properties. |
| prop.type | Optional | "text" \| "html" | "text" | The format type of the returned content (text or HTML). |

## Returns

string