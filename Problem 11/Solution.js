console.log(amountToCoins(46, [25, 10, 5, 2, 1]))

function amountToCoins(amount, coins){
    //assuming that coins are not that sorted at all times
    coins.sort((x, y) => {
        return y - x
    });
    //console.log(coins)
    let amountCoins = [];
    let currentValue = 0;

    //console.log(coins)

    while(true){
        if (amount > coins[0]) {

            amountCoins.push(coins[0]);
            currentValue += coins[0];

        } else {

            coins.splice(0, 1);

        }

        console.log(amountCoins);
        console.log(currentValue);

        
    }
    
    //return amountCoins;
}
