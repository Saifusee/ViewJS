new Vue
({
    el: "#app",

    data:
    {

        playerHealth:100,
        monsterHealth: 100,
        gameRunning: false,
        gaveUpDone: false,

        minAttack: 2,              //Min value for calculation of Damage when click Attack Button
        maxAttack: 10,              //Min value for calculation of Damage when click Attack Button 
        minSpecialAttack: 5,       //Min value for calculation of Damage when click Special Attack Button
        maxSpecialAttack: 15,       //Max value for calculation of Damage when click Special Attack Button
        actionLog: [],

    },

    methods:
    {

        startGame()
        {
            this.gameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gaveUpDone = false;
            this.actionLog = [];
        },

        attack()
        {
            let damageToPlayer = this.damageExpression(this.maxAttack,this.minAttack);
            this.playerHealth -= damageToPlayer;
            this.addLog(true, "Monster hit Player and cause him Damage of " + damageToPlayer + " H.P.")
            if(this.checkWin)
            {
                return;
            }
            let damageToMonster = this.damageExpression(this.maxAttack,this.minAttack)
            this.monsterHealth -= damageToMonster;
            this.addLog(false, "Player hit Monster and cause him Damage of " + damageToMonster + " H.P.")
            this.checkWin;
        },

        specialAttack()
        {
            let damageToPlayer = this.damageExpression(this.maxSpecialAttack,this.minSpecialAttack);
            this.playerHealth -= damageToPlayer;
            this.addLog(true, "Monster hit Player with Dark Rage Attack and in counter to Player Flaming Sword Attack and cause him Damage of " + damageToPlayer + " H.P.")
            if(this.checkWin)
            {
                return;
            }
            let damageToMonster = this.damageExpression(this.maxSpecialAttack,this.minSpecialAttack);
            this.monsterHealth -= damageToMonster;
            this.addLog(false, "Player hit Monster with Special Attack The Flaming Sword and cause him great Damage of " + damageToMonster + " H.P.")
            this.checkWin;
        },

        heal()
        {
            if(this.playerHealth <= 90)
            {
                this.playerHealth += 10;
                if(this.checkWin)
                {
                    return;
                }

            } else 
            {
                this.playerHealth = 100;
            }
            let damageToPlayer = this.damageExpression(this.maxSpecialAttack,this.minSpecialAttack);
            this.playerHealth -= damageToPlayer;
            this.addLog(true, "Monster hit Player and cause him Damage of " + damageToPlayer + " H.P.")
            this.addLog(false, "Player heal himself with 10 H.P.")
            this.checkWin;
        },

        giveUp()
        {
            if(confirm("Are you Sure to Give up and let Monster Win?"))
            {
                this.gameRunning = false;
                this.gaveUpDone = true;
                this.addLog(false, "Player Gave Up and let the Monster Win, to try to Defeat him again click Start New Game Button ")
            }
        },

        damageExpression: function(max, min)
        {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        addLog(player, logText)
        {
            this.actionLog.unshift
            (
                {
                    isPlayer: player,
                    text: logText
                }
            )
        }

    },

    computed:
    {   
        checkWin()
        {
            if(this.monsterHealth <= 0)
            {
                if(confirm("You won the Game and Slay the Monster, Would you like to Play again?"))
                {
                    this.startGame();
                } else
                {
                    this.monsterHealth = 0; //Because in UI it show in negative
                    this.gameRunning = false;    
                }
                return true;

            } else if (this.playerHealth <= 0)
            {
                if(confirm("You lost the Game and become the Dinner Barbecue of Monster, Would you like to challenge him again?"))
                {
                    this.startGame();
                } else
                {
                    this.playerHealth = 0; //Because in UI it show in negative
                    this.gameRunning = false;    
                }
                return true;
            }
            console.log(this.playerHealth);
            console.log(this.monsterHealth);
            console.log(this.actionLog);
            return false;   
        },

    }

})