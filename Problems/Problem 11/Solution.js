//console.log(amountToCoins(46, [25, 10, 5, 2, 1]))

function amountToCoins(amount, coins) {
    amount = Number.parseInt(document.getElementById(amount).value);
    coins = document.getElementById(coins).value.split(',');

    //console.log(coins)
    if (amount !== 0) {
        let amountCoins = [];
        
        // Converts the element of coins into int
        coins = coins.map(element => Number.parseInt(element));

        // Assuming that coins are not that sorted at all times
        coins.sort((x, y) => {
            return y - x
        });

        while (amount != 0) {
            if (amount >= coins[0]) {
                amount -= coins[0];
                amountCoins.push(coins[0]);
            } else {
                coins.splice(0, 1);
            }
        }

        document.getElementById('problem-eleven-output').textContent = amountCoins;

    } else if (amount === 0) {

        document.getElementById('problem-eleven-output').textContent = 0;

    } else {

        document.getElementById('problem-eleven-output').textContent = 'Error, input invalid';

    }


}
