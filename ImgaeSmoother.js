/*
An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider 
it in the average (i.e., the average of the four cells in the red smoother).

*/
// console.log(newImg[i][j], average(i, j, img), i, j);

var imageSmoother = function (img) {
  var newImg = [];
  for (let i = 0; i < img.length; i++) {
    newImg[i] = [];
    for (let j = 0; j < img[0].length; j++) {
      newImg[i][j] = 0;
    }
  }
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      newImg[i][j] = average(i, j, img);
    }
  }
  return newImg;
};

var average = function (i, j, img) {
  var sum = 0,
    count = 0;
  for (let n = -1; n < 2; n++) {
    for (let m = -1; m < 2; m++) {
      if (
        i + n < 0 ||
        j + m < 0 ||
        i + n >= img.length ||
        j + m >= img[0].length
      ) {
        continue;
      }
      sum += img[i + n][j + m];
      count++;
    }
  }

  return Math.floor(sum / count);
};

const img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
];

console.log(imageSmoother(img));

// i-1j    ij   i+1j
// i-1j+1 ij+1 i+1 j+1
