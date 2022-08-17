// step 1 set the event handler

document.getElementById('btn-diposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-amount')
    const depositInputFieldValueString = depositInputField.value ;
    const numAmount = parseFloat(depositInputFieldValueString)

    
    
    const depositAdd = document.getElementById('total-deposit')
    // console.log(depositAdd);
    const preTotalDepositString =depositAdd.innerText;
    const numAmount2 = parseFloat(preTotalDepositString);
    // console.log(typeof numAmount2);

     const currentDeposit = numAmount + numAmount2;
      depositAdd.innerText = currentDeposit;  
    // const totalDeposit = depositInputFieldValue.innerText;
    // const newString = depositInputField.value;
    // const convertToNum1 = parseFloat(newString);
    // const convertToNum2 = parseFloat(preTotalDeposit);
    const totalBalanceElement = document.getElementById('total-balance')
    const preBalanceTotalString = totalBalanceElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);
    const currentBalanceTotal = preBalanceTotal + numAmount;
    // set this 
    totalBalanceElement.innerText = currentBalanceTotal;

    // depositAdd.innerText = currentDeposit;
    // console.log(currentDeposit)



    // last step 
    depositInputField.value = '';
    console.log(totalDeposit)


})