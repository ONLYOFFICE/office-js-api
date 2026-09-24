// Create a shading object and apply it to a paragraph in a document.

// Build the shading once with Api.CreateShd and pass it to the SetShd method in a document.

// Shade a paragraph with a light yellow background in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has a light yellow shading.');
const shd = Api.CreateShd('clear', Api.Color('#FFF2CC'));
paragraph.SetShd(shd);