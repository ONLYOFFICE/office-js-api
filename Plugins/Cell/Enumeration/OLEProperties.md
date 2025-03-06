# OLEProperties

The OLE object properties

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | string | OLE object data (internal format). |
| guid | string | An identifier of the plugin which can edit the current OLE object and must be of the *asc.&#123;UUID&#125;* type. |
| height | number | The OLE object height measured in millimeters. |
| heightPix | number | The OLE object image height in pixels. |
| imgSrc | string | A link to the image (its visual representation) stored in the OLE object and used by the plugin. |
| width | number | The OLE object width measured in millimeters. |
| widthPix | number | The OLE object image width in pixels. |
## Type

Object



## Example

```javascript
let oleProperties = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
```
