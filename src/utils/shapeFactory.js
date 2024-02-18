const shapes = [
  {
    name: 'square',
    shape: [
      {x: 0, y: 0, v: 'b1'},
      {x: 0, y: 1, v: 'b2'},
      {x: 1, y: 0, v: 's'},
      {x: 1, y: 1, v: 's'}
    ],
    rotationIndex: 0,
    rotationNumber: 2,
  },
  {
    name: 'square',
    shape: [
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'},
      {x: 0, y: 0, v: 's'},
      {x: 0, y: 1, v: 's'}
    ],
    rotationIndex: 1,
    rotationNumber: 2,
  },
  {
    name: 'small line',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 0, y: 1, v: 's'},
      {x: 0, y: 2, v: 's'},
      {x: 0, y: 3, v: 's'}
    ],
    rotationIndex: 0,
    rotationNumber: 2,
  },
  {
    name: 'small line',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 's'},
      {x: 2, y: 0, v: 's'},
      {x: 3, y: 0, v: 's'}
    ],
    rotationIndex: 1,
    rotationNumber: 2,
  },
  {
    name: 'L-shape',
    shape: [
      {x: 0, y: 0, v: 'b1'},
      {x: 0, y: 1, v: 'b2'},
      {x: 0, y: 2, v: 's'},
      {x: 1, y: 2, v: 's'}
    ],
    rotationIndex: 0,
    rotationNumber: 4,
  },
  {
    name: 'L-shape',
    shape: [
      {x: 0, y: 0, v: 'b1'},
      {x: 0, y: 1, v: 'b2'},
      {x: 1, y: 0, v: 's'},
      {x: 2, y: 0, v: 's'}
    ],
    rotationIndex: 1,
    rotationNumber: 4,
  },
  {
    name: 'L-shape',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 's'},
      {x: 1, y: 1, v: 'b1'},
      {x: 1, y: 2, v: 'b2'}
    ],
    rotationIndex: 2,
    rotationNumber: 4,
  },
  {
    name: 'L-shape',
    shape: [
      {x: 0, y: 1, v: 's'},
      {x: 1, y: 1, v: 's'},
      {x: 2, y: 0, v: 'b1'},
      {x: 2, y: 1, v: 'b2'}
    ],
    rotationIndex: 3,
    rotationNumber: 4,
  },
  {
    name: 'J-shape',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 's'},
      {x: 2, y: 0, v: 'b1'},
      {x: 2, y: 1, v: 'b2'}
    ],
    rotationIndex: 0,
    rotationNumber: 4,
  },
  {
    name: 'J-shape',
    shape: [
      {x: 0, y: 2, v: 's'},
      {x: 1, y: 2, v: 's'},
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'}
    ],
    rotationIndex: 1,
    rotationNumber: 4,
  },
  {
    name: 'J-shape',
    shape: [
      {x: 0, y: 0, v: 'b1'},
      {x: 0, y: 1, v: 'b2'},
      {x: 1, y: 1, v: 's'},
      {x: 2, y: 1, v: 's'}
    ],
    rotationIndex: 2,
    rotationNumber: 4,
  },
  {
    name: 'J-shape',
    shape: [
      {x: 0, y: 1, v: 'b1'},
      {x: 0, y: 2, v: 'b2'},
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 's'}
    ],
    rotationIndex: 3,
    rotationNumber: 4,
  },
  {
    name: 'T-shape',
    shape: [
      {x: 0, y: 1, v: 's'},
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'},
      {x: 2, y: 1, v: 's'},
    ],
    rotationIndex: 0,
    rotationNumber: 4,
  },
  {
    name: 'T-shape',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 0, y: 1, v: 'b1'},
      {x: 0, y: 2, v: 'b2'},
      {x: 1, y: 1, v: 's'},
    ],
    rotationIndex: 1,
    rotationNumber: 4,
  },
  {
    name: 'T-shape',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'},
      {x: 2, y: 0, v: 's'},
    ],
    rotationIndex: 2,
    rotationNumber: 4,
  },
  {
    name: 'T-shape',
    shape: [
      {x: 1, y: 0, v: 's'},
      {x: 1, y: 1, v: 'b1'},
      {x: 1, y: 2, v: 'b2'},
      {x: 0, y: 1, v: 's'},
    ],
    rotationIndex: 3,
    rotationNumber: 4,
  },
  {
    name: 'left-dog',
    shape: [
      {x: 0, y: 1, v: 's'},
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'},
      {x: 2, y: 0, v: 's'},
    ],
    rotationIndex: 0,
    rotationNumber: 2,
  },
  {
    name: 'left-dog',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 1, v: 'b1'},
      {x: 1, y: 2, v: 'b2'},
      {x: 0, y: 1, v: 's'},
    ],
    rotationIndex: 1,
    rotationNumber: 2,
  },
  {
    name: 'right-dog',
    shape: [
      {x: 0, y: 0, v: 's'},
      {x: 1, y: 0, v: 'b1'},
      {x: 1, y: 1, v: 'b2'},
      {x: 2, y: 1, v: 's'},
    ],
    rotationIndex: 0,
    rotationNumber: 2,
  },
  {
    name: 'right-dog',
    shape: [
      {x: 1, y: 0, v: 's'},
      {x: 0, y: 1, v: 'b1'},
      {x: 0, y: 2, v: 'b2'},
      {x: 1, y: 1, v: 's'},
    ],
    rotationIndex: 1,
    rotationNumber: 2,
  },



]

export const getNextRotation = (rotationShape) => {
  const nextRotationIndex = (rotationShape.rotationIndex + 1) % rotationShape.rotationNumber;
  return shapes.find((shape) => (shape.name === rotationShape.name && shape.rotationIndex === nextRotationIndex));
}

export const getShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
}