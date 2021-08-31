let balance = document.querySelector('.bal');
let new_bal = document.querySelector('#new_bal');
let withdraw_amt = document.querySelector('#withdraw_amt');
let withdraw = document.querySelector('#withdraw');
let success = document.querySelector('#success');
let fail = document.querySelector('#fail');
let menu = document.querySelector('#menu');
let deposit = document.querySelector('#deposit');
let deposit_amt = document.querySelector('#deposit_amt');

function show_withdraw(){
    withdraw.style.display='flex';
    success.style.display='none';
    fail.style.display='none';
    menu.style.display='none';
    deposit.style.display='none';
}
function show_deposit(){
    withdraw.style.display='none';
    success.style.display='none';
    fail.style.display='none';
    menu.style.display='none';
    deposit.style.display='flex';
}
function deposit_(){
    if(deposit_amt.value > 0){
        withdraw.style.display='none';
        success.style.display='flex';
        fail.style.display='none';
        menu.style.display='none';
        deposit.style.display='none';
        new_bal.value = Number(balance.value) + Number(deposit_amt.value);
        balance.value = new_bal.value;
    }
}
function withdraw_(){
    if(withdraw_amt.value>balance.value){
        withdraw.style.display='none';
        success.style.display='none';
        fail.style.display='flex';
        menu.style.display='none';
        deposit.style.display='none';
    }else{
        new_bal.value = balance.value - withdraw_amt.value;
        balance.value = new_bal.value;
        withdraw.style.display='none';
        success.style.display='flex';
        fail.style.display='none';
        menu.style.display='none';
        deposit.style.display='none';
    }
}
function close_it(){
    withdraw.style.display='none';
    success.style.display='none';
    fail.style.display='none';
    deposit.style.display='none';
    menu.style.display='flex';
    withdraw_amt.value ='';
    deposit_amt.value ='';
    balance.value = new_bal.value;
}
