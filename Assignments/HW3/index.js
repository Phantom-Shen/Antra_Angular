// 1
function reverseNum(n){
  let result = 0;
  while(n > 0){
    result *= 10;
    result += n % 10;
    n /= 10;
    n = Math.floor(n);
  }
  return result;
}

console.log(reverseNum(32243));

// 2 
function isPalindrome(str){
  let n = str.length;
  let l = 0, r = n-1;
  while(l < r){
    if(str.charAt(l) != str.charAt(r)){
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses"));

// 3
function allCombination(str){
  let n = str.length;
  let result = [];
  for(let i = 0; i < n; i++){
    for(let j = i+1; j < n+1; j++){
      result.push(str.substring(i, j));
    }
  }
  return result;
}

console.log(allCombination("dog"));

// 4
function sortString(str){
  return str.split("").sort().join("");
}

console.log(sortString("webmaster"));

// 5
function capitalFirst(str){
  return str.split(" ").map(item => {
    return item.charAt(0).toUpperCase() + item.substring(1);
  }).join(" ");
}

console.log(capitalFirst("the quick brown fox"));

// 6
function longestWord(str){
  return str.split(" ").reduce((prev, item) =>{
    if(item.length > prev.length){
      return item;
    }
    return prev;
  }, "");
}

console.log(longestWord("Web Development Tutorial"));

// 7
function countVowel(str){
  return str.split(" ").reduce((prev, word) =>{
    return prev + word.split("").reduce((total, c) => {
      if( c === "a" || c === "e" || c === "i" || c === "o" || c === "u"){
        return total+1;
      }
      return total;
    }, 0);
  }, 0);
}

console.log(countVowel("the quick brown fox"));

// 8
function isPrime(n){
  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
    if((n % i == 0) && (n != i)){
      return false;
    }
  }
  return true;
}

console.log(`2 ${isPrime(2)}`);
console.log(`3 ${isPrime(3)}`);
console.log(`4 ${isPrime(4)}`);
console.log(`8 ${isPrime(8)}`);
console.log(`73 ${isPrime(73)}`);

// 9
function getType(a){
  return typeof(a);
}

console.log(getType(1));
console.log(getType("1"));
console.log(getType({val:1}));
console.log(getType(undefined));
console.log(getType(true))
console.log(getType(getType));

// 10
function getIdentityMatrix(n){
  let result = [];
  for(let i = 0; i < n; i++){
    result.push([]);
    for(let j = 0; j < n; j++){
      if(i == j){
        result[i][j] = 1;
      }
      else{
        result[i][j] = 0;
      }
    }
  }
  return result;
}

console.log(getIdentityMatrix(5));

// 11
function findSecondLargestAndSmallest(nums){
  let n = nums.length;
  let oneL, twoL, oneS, twoS;
  for(let i = 0; i < n; i++){
    if(typeof(twoL) === "undefined" || nums[i] > twoL){
      if(typeof(oneL) === "undefined" || nums[i] > oneL) {
        twoL = oneL;
        oneL = nums[i];
      }
      else{
        twoL = nums[i];
      }
    }
    if(typeof(twoS) === "undefined" || nums[i] < twoS){
      if(typeof(oneS) === "undefined" || nums[i] < oneS) {
        twoS = oneS;
        oneS = nums[i];
      }
      else{
        twoS = nums[i];
      }
    }
  }
  return [twoS, twoL];
}

console.log(findSecondLargestAndSmallest([1,2,3,4,5]));

// 12
function isPerfect(n){
  let sum = 0;
  for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
    if(n % i == 0){
      sum += i + Math.floor(n/i);
    }
  }
  if(sum == 2*n){
    return true;
  }
  return false;
}

console.log(`6 is ${isPerfect(6)}`);
console.log(`28 is ${isPerfect(28)}`);
console.log(`29 is ${isPerfect(29)}`);

// 13
function getFactors(num){
  let result = [];
  for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i == 0){
      result.push(i);
    }
  }
  let n = result.length;
  for(let i = n-1; i >= 0; i--){
    if(num/result[i] != result[i]) result.push(num / result[i]);
  }
  return result;
}

console.log(getFactors(81));

// 14
function amountToCoins(amount, coins){
  let result = [];
  function helper(amount, coins, coinIndex, result){
    if(amount < 0) return false;
    if(amount == 0){
      return true;
    }
    for(let i = coinIndex; i < coins.length; i++){
      result.push(coins[i]);
      if(helper(amount - coins[i], coins, i, result)){
        return true;
      };
      result.pop();
    }
    return false;
  }
  helper(amount, coins, 0, result);
  return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log(amountToCoins(46, [25, 10, 5, 2]));

// 15
function getPower(b, n){
  let result = 1;
  while(n > 0){
    if(n % 2 == 1){
      result *= b;
    }
    n = Math.floor(n/2);
    b = b*b;
  }
  return result;
}

console.log(getPower(2, 3));

// 16
function getUnique(str){
  let set = new Set(str);
  return [...set].join("");
}

console.log(getUnique("thequickbrownfoxjumpsoverthelazydog"));

// 17
function getOccurence(str){
  let freq = {};
  str.split("").forEach(item => {
    if(!freq[item]) freq[item] = 0;
    freq[item] += 1;
  });
  return freq;
}
console.log(getOccurence("thequickbrownfoxjumpsoverthelazydog"));

// 18
function binSearch(arr, target){
  let n = arr.length;
  let l = 0, r = n - 1;
  while(l <= r){
    let mid = l + Math.floor((r - l)/2);
    if(arr[mid] == target){
      return true;
    }
    if(target < arr[mid]){
      r = mid - 1;
    }

    else{
      l = mid + 1;
    }
  }
  return false;
}

console.log(binSearch([1,2,4,5,6], 4));
console.log(binSearch([1,2,4,5,6], 3));

// 19
function filterGreaterThan(arr, num){
  return arr.filter((item, index) => {
    return item > num;
  });
}

console.log(filterGreaterThan([1,2,3,4,5,6,7], 4));

// 20
function getID(str, len){
  let result = "";
  for(let i = 0; i < len; i++){
    result += (str.charAt(Math.floor(Math.random()*str.length)));
  }
  return result;
}

console.log(getID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 32));

// 21
function getSubset(nums, len){
  let result = [];
  function helper(nums, result, comb, cur, len){
    if(len == 0){
      result.push([...comb]);
    }
    else{
      for(let i = cur; i < (nums.length - len + 1); i++){
        comb.push(nums[i]);
        helper(nums, result, comb, i + 1, len-1);
        comb.pop();
      }
    }
  }
  helper(nums, result, [], 0, len);
  return result;
}

console.log(getSubset([1,2,3], 2));

// 22
function countCharOccurrence(str, c){
  return str.split("").reduce((prev, cur) =>{
    if(cur === c){
      return prev+1;
    }
    return prev;
  }, 0);
}

console.log(countCharOccurrence("microsoft.com", "o"));

// 23
function firstNonRepeatChar(str){
  const freq = {};
  const chars = str.split("");
  chars.forEach(item => {
    if(!freq[item]) freq[item] = 0;
    freq[item] += 1;
  });
  for(let c of chars){
    if(freq[c] == 1){
      return c;
    }
  }
  return "";
}

console.log(firstNonRepeatChar('abacddbec'));

// 24
function bubbleSort(nums){
  let n = nums.length;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i - 1; j++){
      if(nums[j] < nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25
function findLongestCountryName(countries){
  return countries.reduce((prev, cur) => {
    if(cur.length > prev.length){
      return cur;
    }
    return prev;
  }, "")
}

console.log(findLongestCountryName(["Australia", "Germany", "United States of America"]));

// 26
function longestSubstringWithoutRepeat(str){
  function allUnique(freq){
    for(let k in freq){
      if(freq[k] > 1){
        return false;
      }
    }
    return true;
  }
  let n = str.length, l = 0, r = 0, maxl = 0, maxr = 0;
  const freq = {};
  while(r <= n){
    while(r <= n && allUnique(freq)){
      if(r-l > maxr-maxl){
        maxl = l;
        maxr = r;
      }
      if(!freq[str.charAt(r)]) freq[str.charAt(r)] = 0;
      freq[str.charAt(r)] += 1;
      r++;
    }
    while(l < r && !allUnique(freq)){
      freq[str.charAt(l)] -= 1;
      l++;
    }
  }
  return str.substring(maxl, maxr);
}

console.log(longestSubstringWithoutRepeat("asdfasqweasdav"));

// 27

function findLongestPalindrome(str){
  const dp = [];
  let maxl = 0, maxr = 0;
  let n = str.length;
  for(let i = 0; i < n; i++){
    dp.push([]);
    for(let j = 0 ;j < n; j++){
      dp[i].push(false);
    }
  }
  for(let i = 0; i < n; i++){
    dp[i][i] = true;
    if(i > 0 && str.charAt(i) == str.charAt(i-1)){
      dp[i][i-1] = true;
      if(2 > maxr-maxl){
        maxl = i-1;
        maxr = i+1;
      }
    }
    for(let j = i-1; j >= 0; j--){
      if(dp[i-1][j+1] && str.charAt(i) == str.charAt(j)){
        dp[i][j] = true;
        if(i-j > maxr-maxl){
          maxl = j;
          maxr = i+1;
        }
      }
    }
  }
  return str.substring(maxl, maxr);
}

console.log(findLongestPalindrome("cbbd"));
console.log(findLongestPalindrome("busislnescsicxpvvysuqgcudefrfjbwwjcchtgqyajdfwvkypfwshnihjdztgmyuuljxgvhdiwphrweyfkbnjgerkmifbirubhseuhrugwrabnjafnbdfjnufdstjbkuwtnpflffaqmjbhssjlnqftgjiglvvequhapasarlkcvbmkwnkuvwktbgfoaxteprobdwswcdyddyvrehvmxrrjiiidatidlpihkbmmruysmhhsncmfdanafdrfpdtfgkglcqpwrrtvacuicohspkounojuziittugpqjyhhkwfnflozbispehrtrnizowrlzcuollagxwtznjwzcumvedjwokueuqktvvouwnsmpxqvvpuwprezrbobrpnwaccwljchdguubjulyilzvmandjjleitweybqkjttschrjjlebnmponvlktzzcdtuybugggcqffkcffpamauvxfbonjrobgpvlyzveiwemmtdvbjciaytvesnocnjrwodtcokgcuoiicxapmrzpkfphjniuvzjrhbnqndfshoduejyktebgdabidxlkstepuwvtrtgbxaeheylicvhrxddijshcvdadxzsccmainyfpfdhqdanfccqkzlmhsfilvoybqojlvbcixjzqpbngdvesuokbxhkomsiqfyukvspqthlzxdnlwthrgaxhtpjzhrugqbfokrdcyurivmzgtynoqfjbafboselxnfupnpqlryvlcxeksirvufepfwczosrrjpudbwqxwldgjyfjhzlzcojxyqjyxxiqvfhjdwtgoqbyeocffnyxhyyiqspnvrpxmrtcnviukrjvpavervvztoxajriuvxqveqsrttjqepvvahywuzwtmgyrzduxfqspeipimyoxmkadrvrdyefekjxcmsmzmtbugyckcbjsrymszftjyllfmoeoylzeahnrxlxpnlvlvzltwnmldi"));

// 28
function passFunction(func){
  func();
}

// 29
function getFuncName(func){
  return func.name;
}

console.log(getFuncName(getFuncName));