// Create a 3D format with the 'PerspectiveFront' camera preset.

// Set the camera which defines the projection and the default rotation of a 3D shape.

// Create a 3D format with a perspective camera, a field of view of 45 degrees and a depth of 10 points.

const threeDFormat = Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", fieldOfView: 45, rotationX: 20, depth: 10 });