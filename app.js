let container = document.querySelector('.container');
let balance  = document.querySelector('#balance');
balance.value = 0;
let money_plus = document.querySelector('#money-plus');
let money_minus = document.querySelector('#money-minus');
let form = document.querySelector('#form');
let text_input = document.querySelector('#text');
let amount_input = document.querySelector('#amount');
let list = document.querySelector('.list');
let plus_sum = 0;
let minus_sum = 0;
let btn = document.querySelector('.btn');
let delete_history = document.querySelector('.delete-btn');
let total = 0;
form.addEventListener('submit',function(el){
    el.preventDefault();
    let classname = +amount_input.value >= 0  ? "plus" : "minus"
    if(text_input.value.trim().length>0 && amount_input.value.trim().length>0){
        list.innerHTML += ` <li class = 'curlist  ${classname}'>
        ${text_input.value} <span class = 'history_amount'>${amount_input.value}</span><button class="delete-btn">x</button>
    </li>`
    if(+amount_input.value > 0 ){
        plus_sum = plus_sum + parseInt(amount_input.value);
        money_plus.innerHTML = `$${plus_sum}`;
    }
    else{
        minus_sum = minus_sum + parseInt(amount_input.value);
        money_minus.innerHTML = `$${minus_sum}`;
    }
    }
    else{
        alert('doldur')
    }
    total = parseInt(plus_sum+minus_sum);
    balance.innerHTML = total;
    el.target.reset();
})
list.addEventListener('click',function(e){
    let curAmount = e.target.parentElement.firstElementChild.textContent;
    parseInt(curAmount)
    if(e.target.classList.contains('delete-btn')){
        if(curAmount<0){
            minus_sum = minus_sum - curAmount;
            total = total - curAmount;
            money_minus.innerHTML = minus_sum;
            balance.innerHTML = total;
            e.target.parentElement.remove();
        }  
        else{
            plus_sum = plus_sum - curAmount;
            total = total - curAmount
            money_plus.innerHTML = plus_sum;
            balance.innerHTML = total;
            e.target.parentElement.remove();
        }
    }
})

