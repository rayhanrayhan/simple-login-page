// step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //    step 2: get the deposit amount from the deposit inpt field  
    //   For input field use.value to the the value inside the input field 
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount)
    //   step 3: get the current deposit total amount 
    //   for no-input(element other than input ,textarea) Use innerText to get the text 
    const deposittotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = deposittotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //   Set the deposit total 
    deposittotalElement.innerText = currentDepositTotal;

    // Step 5: Get Ballance Current Total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);


    // Step 6: Calculate Current Balance 
    const currentBalanceTotal = previousbalanceTotal + newDepositAmount
    // set the balace total 
    balanceTotalElement.innerText = currentBalanceTotal;


    // step 7: clear the deposit field 
    depositField.value = '';
})