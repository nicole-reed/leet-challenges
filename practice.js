// return indices of the two numbers such that they add up to target
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // j needs to be i + 1 not just 1 in case nums = [1, 5, 5, 2] when target is 10
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum([1, 5, 5, 2], 7))

