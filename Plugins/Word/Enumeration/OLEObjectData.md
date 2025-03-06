# OLEObjectData

The OLE object data.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| ApplicationId | string | An identifier of the plugin which can edit the current OLE object and must be of the *asc.&#123;UUID&#125;* type. |
| Data | string | OLE object data (internal format). |
| Height | number | The OLE object height measured in millimeters. |
| HeightPix | number | The OLE object image height in pixels. |
| ImageData | string | An image in the base64 format stored in the OLE object and used by the plugin. |
| InternalId | string | The OLE object identifier which is used to work with OLE object added to the document. |
| ParaDrawingId | string | An identifier of the drawing object containing the current OLE object. |
| Width | number | The OLE object width measured in millimeters. |
| WidthPix | number | The OLE object image width in pixels. |
## Type

Object



## Example

```javascript
let oleObjectData = {
    "Data": "{data}",
    "ImageData": "data:image/png;base64,image-in-the-base64-format",
    "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "Width": 70,
    "Height": 70,
    "WidthPix": 60 * 36000,
    "HeightPix": 60 * 36000
};
window.Asc.plugin.executeMethod("InsertOleObject", [oleObjectData, true]);
```
