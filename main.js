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
 name: 'stack1', a : [4,3,2,1],           //0
 name: 'stack2', b : [1,4,3,2],           //1
 name: 'stack3', c : [2,3,1,4]            //2
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = () => {


}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
    const notLegal = (s,e) => {
      let start = stacks[s]
      let end = stacks[e]
  
      console.log('endstack-1;', end.length-1)
      console.log('stacks c: ', stacks.c)
      console.log('start.length: ', start.length)
  
  
      if((start[start.length-1] < end[end.length-1]) || (end.length === 0)){
  return true
      }else if((start.length === 0) && (end.length === 0)){
        return false
      }
      else{
        return false
      }
  
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  let checkForWin = 'You win'
  if   (stacks === 'a' [1,2,3,4] ){
    return checkForWin
  }else if   (stacks === 'b' [1,2,3,4]){
    return checkForWin
  }else if  (stacks === 'c'[1,2,3,4])
    return checkForWin
  }



// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  for (let s=0; s<stacks.length; s++){
let startStack = stacks[e];
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
