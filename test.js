const x = [
  {
    text: "Sucht",
    bounding_box: {
      x1: 83,
      y1: 32,
      x2: 129,
      y2: 47,
    },
  },
  {
    text: "man",
    bounding_box: {
      x1: 142,
      y1: 37,
      x2: 176,
      y2: 47,
    },
  },
  {
    text: "fiir",
    bounding_box: {
      x1: 188,
      y1: 32,
      x2: 212,
      y2: 47,
    },
  },
  {
    text: "S",
    bounding_box: {
      x1: 224,
      y1: 33,
      x2: 235,
      y2: 47,
    },
  },
  {
    text: "einen",
    bounding_box: {
      x1: 248,
      y1: 33,
      x2: 290,
      y2: 47,
    },
  },
  {
    text: "bezeichnenden",
    bounding_box: {
      x1: 300,
      y1: 32,
      x2: 418,
      y2: 47,
    },
  },
  {
    text: "Namen,",
    bounding_box: {
      x1: 431,
      y1: 32,
      x2: 494,
      y2: 49,
    },
  },
  {
    text: "so",
    bounding_box: {
      x1: 506,
      y1: 36,
      x2: 522,
      y2: 46,
    },
  },
  {
    text: "konnte",
    bounding_box: {
      x1: 533,
      y1: 31,
      x2: 592,
      y2: 46,
    },
  },
  {
    text: "man,",
    bounding_box: {
      x1: 41,
      y1: 60,
      x2: 78,
      y2: 73,
    },
  },
  {
    text: "iihnlich",
    bounding_box: {
      x1: 86,
      y1: 55,
      x2: 145,
      y2: 70,
    },
  },
  {
    text: "wie",
    bounding_box: {
      x1: 155,
      y1: 55,
      x2: 180,
      y2: 70,
    },
  },
  {
    text: "von",
    bounding_box: {
      x1: 189,
      y1: 60,
      x2: 216,
      y2: 70,
    },
  },
  {
    text: "der",
    bounding_box: {
      x1: 225,
      y1: 55,
      x2: 251,
      y2: 70,
    },
  },
  {
    text: "Grosse",
    bounding_box: {
      x1: 259,
      y1: 55,
      x2: 314,
      y2: 70,
    },
  },
  {
    text: "U",
    bounding_box: {
      x1: 322,
      y1: 55,
      x2: 335,
      y2: 70,
    },
  },
  {
    text: "gesagt",
    bounding_box: {
      x1: 341,
      y1: 56,
      x2: 393,
      y2: 75,
    },
  },
  {
    text: "ist,",
    bounding_box: {
      x1: 401,
      y1: 55,
      x2: 424,
      y2: 73,
    },
  },
  {
    text: "sio",
    bounding_box: {
      x1: 432,
      y1: 55,
      x2: 453,
      y2: 69,
    },
  },
  {
    text: "sei",
    bounding_box: {
      x1: 462,
      y1: 55,
      x2: 484,
      y2: 69,
    },
  },
  {
    text: "der",
    bounding_box: {
      x1: 491,
      y1: 54,
      x2: 518,
      y2: 69,
    },
  },
  {
    text: "Wirme-",
    bounding_box: {
      x1: 528,
      y1: 54,
      x2: 593,
      y2: 69,
    },
  },
  {
    text: "und",
    bounding_box: {
      x1: 41,
      y1: 79,
      x2: 72,
      y2: 93,
    },
  },
  {
    text: "Werkinhalt",
    bounding_box: {
      x1: 83,
      y1: 78,
      x2: 172,
      y2: 93,
    },
  },
  {
    text: "des",
    bounding_box: {
      x1: 180,
      y1: 78,
      x2: 206,
      y2: 93,
    },
  },
  {
    text: "Korpers,",
    bounding_box: {
      x1: 214,
      y1: 78,
      x2: 284,
      y2: 97,
    },
  },
  {
    text: "von",
    bounding_box: {
      x1: 292,
      y1: 83,
      x2: 319,
      y2: 93,
    },
  },
  {
    text: "der",
    bounding_box: {
      x1: 327,
      y1: 78,
      x2: 354,
      y2: 93,
    },
  },
  {
    text: "S",
    bounding_box: {
      x1: 426,
      y1: 78,
      x2: 438,
      y2: 93,
    },
  },
];
let p = [];
x.map((res) => {
  p = p + " " + res.text;
});
console.log(p);
