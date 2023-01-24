
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

// Given an integer x, return true if x is a palindrome and false otherwise.
const isPalindrome = function (x) {
    const chars = x.toString().split('')
    const reversed = chars.reverse()
    return parseInt(reversed.join('')) === x
};

// console.log(isPalindrome(-121))

// Given a valid roman numeral convert it to an int
const romanToInt = function (s) {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const chars = s.split('')

    let count = 0
    for (let i = 0; i < chars.length; i++) {
        count += romans[chars[i]]
    }

    if (s.includes('IV') || s.includes('IX')) {
        count -= 2
    }

    if (s.includes('XL') || s.includes('XC')) {
        count -= 20
    }

    if (s.includes('CD') || s.includes('CM')) {
        count -= 200
    }

    return count
};

// console.log(romanToInt("MCMXCIV"))

//https://leetcode.com/problems/plus-one/
// Increment the large integer by one and return the resulting array of digits. this passes 110/111 tests but fails the all 9 huge number
const plusOne = function (digits) {
    if (digits.length > 15) {
        const lastNum = digits[digits.length - 1]
        if (lastNum === 9) {
            const newDigs = digits.slice(0, -2)
            newDigs.push(digits[digits.length - 2] + 1)
            newDigs.push(0)
            return newDigs
        }
        const newDigits = digits.slice(0, -1)
        newDigits.push(lastNum + 1)
        return newDigits
    }
    const num = digits.join('')
    let plusOne = parseInt(num) + 1
    const numStrs = plusOne.toString().split('')

    return numStrs.map(char => Number(char))
};

// console.log(plusOne([9, 9]))
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))

// remove duplicates, keep same order, return number of unique elements-
const removeDuplicates = function (nums) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        mySet.add(nums[i])
    }

    return Array.from(mySet).length
};

// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

const lengthOfLastWord = function (s) {
    if (s.includes(' ')) {
        const words = s.split(' ')
        console.log(words)
        for (let i = words.length - 1; i >= 0; i--) {
            if (words[i] != '') {
                return words[i].length
            }
        }
    }
    return s.length
};

// console.log(lengthOfLastWord("l "))
// console.log(lengthOfLastWord("   fly me   to   the moon  "))
