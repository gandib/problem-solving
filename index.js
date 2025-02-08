// Solution 1
const getIndex = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return console.log(i, i + 1);
    }
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return console.log([i, j]);
      }
    }
  }
};

// getIndex([1, 4, 5], 6);

// Solution 2
const getTriplets = (nums) => {
  const triplets = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j + 1] + nums[j + 2] === 0) {
        const triplet = [nums[i], nums[j + 1], nums[j + 2]];
        if (
          triplets.length === 0 ||
          (triplets.map((trip) => `${trip[0]}, ${trip[1]}, ${trip[2]}`)[0] ===
            `${nums[i]}, ${nums[j + 1]}, ${nums[j + 2]}`) !==
            true
        ) {
          triplets.push(triplet);
          i++;
        }
      }
    }
  }
  return console.log(triplets);
};

// getTriplets([-1, 0, 1, 2, -1, -4]);
