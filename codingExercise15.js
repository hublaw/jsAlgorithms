// Write a recursive function called fib which accepts a number, n, and returns the
// nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1, and where
// every number thereafter is the sum of the previous 2 numbers

function fib(number){
  if(number === 0) return [];
  if(number === 1 || number === 2) return 1;

  let fibSeq = [1,1];

  function helper(arr, num){
    if(num === 2) return;
    fibSeq.push(fibSeq[0] + fibSeq[1]);
    fibSeq = fibSeq.slice(1);
    helper(fibSeq, --num);
  }
  helper(fibSeq, number);
  return fibSeq.pop();
}

/**
pure recursive:
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

iterative:
function fib(number){
  if(number === 0) return [0];
  if (number === 1) return [1];
  var fibseq = [1,1];
  for(var i = 2; i < number; i++){
    fibseq.push(fibseq[i - 1] + fibseq[i - 2]);
  }

  return fibseq.pop();
}
**/
