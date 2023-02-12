/*
1.Add evenet handler with the withdraw button 
2. get the withdraw amount from the withraw input field
2.5. ALSO MAKE SURE  to convert the input a number by using parsefloat
3. get privious withdraw  total
4. Calculate total withdraw amount
4-5.Set Total Withdraw amount 
5.Get the previous balance total 
6.Calculate new Balance Total 
6-5. Set the new Balance total
7.Clear the input field
*/
// step 1:
document.getElementById('btn-withraw').addEventListener('click', function () {
    // console.log('withraw button click');
    // step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // Step 7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('মামুর বেটা সঠিকভাবে নাম্বার বসা,উল্টাপাল্টা চাপিস না ');
        return;
    }

    // Step 3:
    const previouswithdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = previouswithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalString);
    // console.log(previouswithdrawTotalString)


    // STept 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('invalid activity');
        return;
    }
    // Step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previouswithdrawTotalElement.innerText = currentWithdrawTotal;

    // Step 6:
    const newBalaceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;





})