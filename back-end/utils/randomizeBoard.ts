// input: array[m]
// output: randomized array[n*n-1]

// array will be at least n*n-1 size. but will likely be more
// we need to randomly pick from array[m], ensuring no duplicates are selected
// middle index (aka the free space), should be empty as it will be skipped over when the board is created

function randomizeBoard(prompts: string[], size:number) : string[] {
  const result: string[] = [];
  const resultSize = size * size;
  const promptLength = prompts.length;

  if(resultSize > promptLength) {
    throw new Error('Size of input array must be equal or larger than the output array');
  }

  while(result.length < resultSize){
    const randomIndex = Math.floor(Math.random() * promptLength);
    if(prompts[randomIndex] !== ""){
      result.push(prompts[randomIndex]);
      prompts[randomIndex] = "";
    }
  }

  console.log(result);
  return result;
}

export { randomizeBoard };