function bubbleSort (inputArr)
{
    let n = inputArr.length();
    for(let i = 0; i < n - 1; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(inputArr[i+1] < inputArr[i])
            {
            //swap
            let temp = inputArr[i];
            inputArr[i] = inputArr[i+1];
            inputArr[i+1] = temp;
            }
        }
    }
    return inputArr;
}
