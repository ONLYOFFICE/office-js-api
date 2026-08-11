// Create a text body on a PDF shape and return its full text range for editing.

// Unlike GetTextRange, this method initializes a text body if the shape does not have one.

// Create a shape, initialize its text body with CreateTextRange, and add formatted text.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);

const range = shape.CreateTextRange();
range.SetText("Created text body");
range.SetBold(true);
