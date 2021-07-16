
// first-class ticket add
document.getElementById('firstClassAdd').addEventListener('click', function () {
    const ticketInput = document.getElementById('ticket-field');
    const ticketInputNum = parseInt(ticketInput.value);
    const newTicketCount = ticketInputNum + 1;
    ticketInput.value = newTicketCount;

    totalPrice()

})

// first-class ticket remove 

document.getElementById('firstClassMinus').addEventListener('click', function () {
    const ticketInput = document.getElementById('ticket-field');
    const ticketInputNum = parseInt(ticketInput.value);

    if (ticketInputNum === 0) {
        document.getElementById('sub-total').innerText = '$' + 0;
    }

    else if (ticketInputNum < 0) {
        alert('Enter a valid number')
        document.getElementById('sub-total').innerText = '$' + 0;
    }


    else {
        const newTicketCount = ticketInputNum - 1;
        ticketInput.value = newTicketCount;

    }
    totalPrice()


})







// economy class ticket add

document.getElementById('economy-ticket-add').addEventListener('click', function () {
    const economyTicketInput = document.getElementById('economy-ticket-field');
    const economyTicketInputNum = parseInt(economyTicketInput.value);
    const newEconomyTicketCount = economyTicketInputNum + 1;
    economyTicketInput.value = newEconomyTicketCount;
    totalPrice()

})

// economy class ticket remove

document.getElementById('economy-ticket-remove').addEventListener('click', function () {
    const economyTicketInput = document.getElementById('economy-ticket-field');
    const economyTicketInputNum = parseInt(economyTicketInput.value);

    if (economyTicketInputNum === 0) {
        document.getElementById('sub-total').innerText = '$' + 0;

    }

    else if (economyTicketInputNum < 0) {
        alert('Enter a valid number')
        document.getElementById('sub-total').innerText = '$' + 0;
    }



    else {
        const newEconomyTicketCount = economyTicketInputNum - 1;
        economyTicketInput.value = newEconomyTicketCount;

    }

    totalPrice()

})




// -------------- ticket price calculation -------------------

function totalPrice() {
    const ticketInput = document.getElementById('ticket-field');
    const ticketInputNum = parseInt(ticketInput.value);
    const firsClassPrice = ticketInputNum * 150;

    const economyTicketInput = document.getElementById('economy-ticket-field');
    const economyTicketInputNum = parseInt(economyTicketInput.value);
    const economyTicketPrice = economyTicketInputNum * 100;
    const subTotalPrice = firsClassPrice + economyTicketPrice;
    document.getElementById('sub-total').innerText = '$' + subTotalPrice;
    const vat = subTotalPrice * .1;
    document.getElementById('vat').innerText = '$' + vat;
    const totalPrice = subTotalPrice + vat;
    document.getElementById('total-cost').innerText = '$' + totalPrice;

}

document.getElementById('total-price').addEventListener('click', function () {
    totalPrice()
})

//confirm-booking section

document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('b-form').style.display = 'none'
    document.getElementById('confirm-booking').style.display = 'block'



    const ticketInput = document.getElementById('ticket-field');
    const ticketInputNum = parseInt(ticketInput.value);
    document.getElementById('f-class-booked').innerText = 'First class ticket ------ :' + '$'+ ticketInputNum
    const firsClassPrice = ticketInputNum * 150;

    const economyTicketInput = document.getElementById('economy-ticket-field');
    const economyTicketInputNum = parseInt(economyTicketInput.value);
    document.getElementById('b-class-booked').innerText = 'Business class ticket ------ :' +'$'+ economyTicketInputNum;
    const economyTicketPrice = economyTicketInputNum * 100;
    const subTotalPrice = firsClassPrice + economyTicketPrice;
    document.getElementById('sub-total-paid').innerText = 'Total ticket price ------:' +'$'+ subTotalPrice;
    const vat = subTotalPrice * .1;
    document.getElementById('vat-paid').innerText = 'VAT(10%)------:' +'$'+ vat;
    const totalPrice = subTotalPrice + vat;
    document.getElementById('final-cost').innerText = 'Total paid------:' +'$'+ totalPrice;

    
 
})









