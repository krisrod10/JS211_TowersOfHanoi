'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a : [4,3,2,1],    //0
  b : [],           //1
  c : []            //2
};

// Start here. What is this function doing?
// logging a visual representation
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
// taking in a string and storing it inside startStack same process with endStack
// starStack starts to become the key for stacks
const movePiece = (startStack, endStack) => {
  //code here
  startStack = stacks[startStack]
  //cosnsole.log(start + startStack)
  endStack = stacks[endStack]

  let fromMove = startStack.pop()
  endStack.push(fromMove);
}
const letter1 = (startStack, endStack) => {
  if((startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' || endStack === 'b' || endStack === 'c')){
    return true
  }else  return false

}
// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
 // Your code here   
 //console.log(stacks[startStack]);
 let startStackArr = stacks[startStack];
 let endStackArr = stacks[endStack];

 let lastStart = startStackArr[startStackArr.length-1];
 let lastEnd = endStackArr[endStackArr.length-1];

 if(lastStart < lastEnd){
   return true
 }else if(lastStart > lastEnd){
   return false
 }
 
 //let lastStartStack = stacks.startStack[stacks.startStack];  
  const goodLetter = letter1(startStack, endStack)
  if(!goodLetter){
    console.log('wrong')
    return false
  }else return true
}






// What is a win in Towers of Hani? When should this function run?
const checkForWin = (startStack, endStack) => {
// Your code here 
if((startStack.b[0] === 4 && startStack.b[1] === 3 && startStack.b[2] === 2 && startStack.b[3] === 1) ||
(endStack.c[0] === 4 && endStack.c[1] === 3 && endStack.b[2] === 2 && endStack.v[3] === 1)){
  console.log('You win')
  return true
}else {
  return false
}


}



// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
 // Your code here 
 console.log(isLegal(startStack, endStack))
 if(isLegal(startStack, endStack)){
   movePiece(startStack, endStack)
 }

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
