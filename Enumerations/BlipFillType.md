# BlipFillType

The type of a fill which uses an image as a background.

## Type

String

## Properties

- "tile" - if the image is smaller than the shape which is filled, the image will be tiled all over the created shape surface.
- "stretch" - if the image is smaller than the shape which is filled, the image will be stretched to fit the created shape surface.

## Example

This example creates a blip fill with an image which is tiled all over the created shape:

```javascript
var oFill = Api.CreateBlipFill("https://example.com/myimage.png", "tile");
```