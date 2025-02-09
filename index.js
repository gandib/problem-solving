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

getIndex([1, 4, 5], 6);

// Solution 2

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// console.log("-1,0,-1" === "1,0,-1");
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

getTriplets([-1, 0, 1, 2, -1, -4]);

// Solution 3
const removeDuplicates = (nums) => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const nums = [2, 1, 0, 1, 3, 3];
nums.sort((a, b) => a - b);
let k = removeDuplicates(nums);
console.log(k, `nums =`, nums.slice(0, k));

// Solution 5
const getIndexOfTarget = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

console.log(getIndexOfTarget([1, 3, 4, 6, 7, 8, 10, 12, 13, 16], 17));
