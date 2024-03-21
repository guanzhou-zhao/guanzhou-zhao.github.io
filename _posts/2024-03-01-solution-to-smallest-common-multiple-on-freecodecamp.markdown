---
layout: post
title:  "solutions to Smallest Common Multiple on freeCodeCamp"
date:   2024-03-01 14:24:03 +1300
categories: [javascript]
---

### [Smallest Common Multiple](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple)

> It takes time to figure out what the common multiple and common factor actually are; what the smallest common multiple and largest common factor are; 

- first, I didn't try to find two numbers common factor. Istead, I tried to check if y is x's factor.
- then, I added k, to try if k is x and y's common factor and add k into an array if true. find all the k and push into the array. Get the result from all the multiple result / all the k.
- It doesn't work. then I tried to avoid pushing same k into the array. Failed the test again.
- After calculating on paper manually, I added the commonDivisorOjb(I mean common factor Obj). push k into obj.j which is an array. By checking test result, found that I have pushed too much common factors
- If I have found a common factor between j and i, I push this common factor to j's array, then next time, I should find common factor between j/j's common factors and others, not j itself.
- so it becomes to find common factor between i/I's common factors and j/J's common factors, so that common factor is not counted more than needed.
- The program looks all right now, and satisfies most of the test cases. But still not all.
- So I added logs to print out i, j, dividedI, dividedJ, and potential common factor k.
- the logs shows 4 and 2 are both common factors between 8 and 12, so then are both added to `commonDivisorOjb[8]`,which is`[4, 2]`. It is wrong, as the largest common factor for 8 and 12 is `4`.
- so `dividedI /= k;` was added, when looping through `k` to find their common factors.
- Finally, all tests passed.

> The key is to record common factors in `{1:[], 2:[], 3:[], ...}`, and not record too much or too less. Any common factors are found, should divide i and j, before continuing to find common factors between i and j.

### Solutions:

{% highlight javascript %}
function smallestCommons(arr) {
  let result = 1;
  let [small, big] = arr;
  if (small > big) {
    [small, big] = [big, small];
  }
  let commonDivisorOjb = [...Array(big-small+1).keys()].map(foo => foo + small).reduce((obj,e)=>{obj[e]=[];return obj}, {});
  for (let i=big; i>small; i--) {
    for (let j=i-1; j>=small; j--) {
      
      let dividedI = getDividedNumber(i, commonDivisorOjb[i]);
      let dividedJ = getDividedNumber(j, commonDivisorOjb[j]);

      for (let k=dividedI>dividedJ?dividedI:dividedJ; k>=2; k--) {
        console.log(`${i} ${j} ${dividedI} ${dividedJ}  ${k}`)
        if(Number.isInteger(dividedI/k) && Number.isInteger(dividedJ/k)) {
          commonDivisorOjb[j].push(k);
          // dividedI /= k;
          // dividedJ /= k;
          break;
          console.log(`.          added ${k} to ${j} on ${i}`)
        }
      }
    }
  }
  for (let i=big; i>=small; i--) {
    result*=i;
  }
  
  console.log(commonDivisorOjb);
  return result/Object.values(commonDivisorOjb).reduce((r,a)=>[...r,...a],[]).reduce((m,n)=>m*n, 1);
}
function getDividedNumber(n, arr) {
  return arr.reduce((m, e)=>m/e,n);
}
console.log(smallestCommons([1, 13]));
{% endhighlight %}

### After sleeping on the challenge, I got more concised solution 2.

> For number `i` and `j`, `k` is their largest common factor, then `i/k * j`(or `i*j/k`) would be `i` and `j`'s largest common multiple. 

> Instead of storing the largest common factor between two numbers, the new solution would divid the number by the largest common factor strait away, ie. `numbSequence[j]/=k`. 

> looping through the number sequence, and find the largest common factor for any two numbers and let it go, then there would be no common factor for any two numbers in the sequence. The multiple result of the rest would be the answer(smallest common multiple).

### simplified solution 2:

{% lighlight javascript}
function smallestCommons(arr) {
 
  let [small, big] = arr;
  if (small > big) {
    [small, big] = [big, small];
  }
  let numSequence = [...Array(big-small+1).keys()].map(foo => foo+small);

  for (let i=numSequence.length-1; i>0; i--) {
    for (let j=i-1; j>=0; j--) {

      for (let k=numSequence[i]>numSequence[j]?numSequence[j]:numSequence[i]; k>=2 && numSequence[i]>1 && numSequence[j] >1; k--) {
        //console.log(`${numSequence[i]} ${numSequence[j]}     ${k}`)
        if(Number.isInteger(numSequence[i]/k) && Number.isInteger(numSequence[j]/k)) {
          numSequence[j] /= k;

          //console.log(`.          added ${k} to ${numSequence[j]} on ${numSequence[i]}`)
          break;
        }
      }
    }
  } 
   
  return numSequence.reduce((m, n) => n*m, 1);
}

console.log(smallestCommons([1, 5]));
{% endhighlight %}

### takeaways 

> understand the challenge and manual solution throughly first, before heading into coding.

> the more you think about the question, the more concise answer you can give.

# References:

[Mdn web doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
