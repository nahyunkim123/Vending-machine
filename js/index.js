const beverage = document.querySelectorAll('.beverage');
const selectedItemsList = document.getElementById('selectedItems');
const totalPriceEle = document.getElementById('totalPrice');
const inputBtn = document.querySelector('#input-btn')
const inputMoney = document.querySelector('#input-money')
const changeEle = document.getElementById('change')
const paidItem = document.getElementById('output')

var itemList = [];
let totalPrice = 0;
let index = 0;

// 1. 음료 버튼을 클릭했을 때 우측 선택된 itemList에 클릭한 음료 추가
beverage.forEach((beverage, idx) => {
    beverage.addEventListener('click', (e, i) => {

        index++;
        const beverageName = beverage.getAttribute('data-name');
        const beveragePrice = parseFloat(beverage.getAttribute('data-price'));

        itemList.push({ beverageName });
        const listItem = document.createElement('li');

        listItem.textContent = `${beverageName}`;
        selectedItemsList.appendChild(listItem);

        // 총 금액 계산, 나타내기
        totalPrice += beveragePrice;
        totalPriceEle.textContent = totalPrice;

    });
});

// 2. 돈을 투입하고 버튼을 클릭했을 때 처리
inputBtn.addEventListener('click', () => {
    const inputMoneyValue = parseFloat(inputMoney.value);


    if (inputMoneyValue >= totalPrice) {
        const change = inputMoneyValue - totalPrice;
        changeEle.textContent = change;

        //  output 표시
        itemList.forEach((item) => {
            const paidItemElement = document.createElement('div');
            paidItemElement.textContent = ` ${item.beverageName}`;
            paidItem.appendChild(paidItemElement);
        });

      
        itemList = [];
        totalPrice = 0;
        index = 0;
        selectedItemsList.innerHTML = '';
        totalPriceEle.textContent = '';


    } else {
        alert('금액이 부족합니다.');
    }
});


