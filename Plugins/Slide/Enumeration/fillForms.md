# fillForms

An object containing the form properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| tags | object | The form tags which specify the content for each form type with such a tag. |
| tags.text | string | The text field value (some text). |
| tags.checkBox | string | The checkbox form value (**true** - checked, **false** - unchecked). |
| tags.picture | string | The image form value (a link to the image). |
| tags.comboBox | string | The combo box form value (one of the items from the combo box list values). |
## Type

Object



## Example

```javascript
var initSettings = &#123;
    "copyoutenabled" : false,
    "hideContentControlTrack" : false,
    "watermark_on_draw" : JSON.stringify(&#123;
        "transparent" : 0.3,
        "type" : "rect",
        "width" : 100,
        "height" : 100,
        "rotate" : -45,
        "margins" : [ 10, 10, 10, 10 ],
        "fill" : [255, 0, 0],
        "stroke-width" : 1,
        "stroke" : [0, 0, 255],
        "align" : 1,

        "paragraphs" : [ &#123;
            "align" : 2,
            "fill" : [255, 0, 0],
            "linespacing" : 1,

            "runs" : [
                        &#123;
                            "text" : "Do not steal, %user_name%!",
                            "fill" : [0, 0, 0],
                            "font-family" : "Arial",
                            "font-size" : 40,
                            "bold" : true,
                            "italic" : false,
                            "strikeout" : false,
                            "underline" : false
                        &#125;,
                        &#123;
                            "text" : "&lt;%br%&gt;"
                        &#125;
                    ]
            &#125;
        ]
    &#125;),
    "disableAutostartMacros" : true,
    "fillForms" : JSON.stringify(&#123;
        "tags" : &#123;
            "111" : &#123;
                "text" : "Text in form with tag 111",
                "checkBox" : "true",
                "picture" : "https://upload.wikimedia.org/wikipedia/commons/9/91/ONLYOFFICE_logo.png",
                "comboBox" : "item1"
            &#125;,
            "222" : &#123;
                "text" : "Text in form with tag 222",
                "checkBox" : "false",
                "comboBox" : "item2"
            &#125;,
            "333" : &#123;
                "text" : "OnlyOffice"
            &#125;
        &#125;
    &#125;)
&#125;;
window.Asc.plugin.executeMethod("SetProperties", [initSettings]);
