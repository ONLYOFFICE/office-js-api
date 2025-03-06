# SetProperties

Sets the properties to the document.

## Syntax

```javascript
expression.SetProperties(obj, obj.copyoutenabled, obj.hideContentControlTrack, obj.watermark_on_draw, obj.disableAutostartMacros, obj.fillForms);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | Required | object |  | The document properties. |
| obj.copyoutenabled | Required | boolean |  | Disables copying from the editor if it is set to **false**. |
| obj.hideContentControlTrack | Required | boolean |  | Disables tracking the content control if it is set to **true**. |
| obj.watermark_on_draw | Required | string |  | A string value for [watermark](../../Enumeration/watermark_on_draw.md) in JSON format. |
| obj.disableAutostartMacros | Required | boolean |  | Sets a flag that specifies that macros are started automatically when the editor opens. |
| obj.fillForms | Required | string |  | Sets rules in JSON format for filling document [forms](../../Enumeration/fillForms.md) by tags. |

## Returns

This method doesn't return any data.