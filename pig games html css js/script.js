const rollBtn = document.querySelector('.roll-btn');
const holdBtn = document.querySelector('.hold-btn');
const Refresh = document.querySelector('.reload');
const diceEl = document.querySelector('.dice-5');
const scoreP0 = document.querySelector('.score--0');
const scoreP1 = document.querySelector('.score--1');
const panelP0 = document.querySelector('.panel-pl0');
const panelP1 = document.querySelector('.panel-pl1');
const currentScorepl0 = document.querySelector('.current--0');
const currentScorepl1 = document.querySelector('.current--1');
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function()
{
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        panelP0.classList.toggle('player--active');
        panelP1.classList.toggle('player--active');
}
rollBtn.addEventListener('click', function()
{
    //generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
     
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
     
    
    //check if its 1 move to next player if not continue


    //switch bg of player panel if dice = 1 if not dont switch
    if(dice !== 1)
    {
        // panelP0.style.backgroundColor = '#daaebc';
        // panelP1.style.backgroundColor = '#c791aa';
        const sum = currentScore += dice;
        document.querySelector(`.current--${activePlayer}`).textContent = sum;
    }
    else
    {
        // panelP0.style.backgroundColor = '#c791aa';
        // panelP1.style.backgroundColor = '#daaebc';
        switchPlayer();
        
    }
})
Refresh.addEventListener('click', function()
{
    location.reload();
})
holdBtn.addEventListener('click' , function()
{
    //hold the current score into the points of that player
    const points = scores[activePlayer] += currentScore;
    const pn = document.querySelector(`.score--${activePlayer}`);
    pn.textContent = points;
    //when the player reach to score 100 the game is finished
    
    //switch to next player
    switchPlayer();
    

})