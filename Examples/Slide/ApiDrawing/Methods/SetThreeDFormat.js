// Rotate a shape in 3D and keep its text flat in a presentation.

// Apply a 3D format with rotation, depth, contour and lighting to a drawing.

// Create a shape with text, apply the 3D format with SetThreeDFormat, and keep the text facing the viewer.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 100 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(60 * 36000, 50 * 36000);
slide.AddObject(shape);
shape.GetContent().GetElement(0).AddText("Flat text on a 3D shape");
const threeDFormat = Api.CreateThreeDFormat({
    presetCamera: "PerspectiveFront",
    rotationX: 40,
    rotationY: 20,
    presetLighting: "Balanced",
    depth: 20,
    extrusionColor: Api.RGB(31, 56, 100),
    contourWidth: 1,
    contourColor: Api.RGB(255, 255, 255),
    projectText: false
});
shape.SetThreeDFormat(threeDFormat);