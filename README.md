                                                      POKEMON BATTLE ROYALE

Overview:

This is a pokemon battle and trading game where user will experience the joy of being a pokemon trainer. At the very start of the game the user is asked to login if he already have an account if not he is asked to register. While not logged in, the user can freely view trainers that wants to trade or battle with their pokemon with other trainers pokemon. When logged in the user becomes a pokemon trainer, he has the access to view his pokemons, battle or capture a pokemon, access to a pokemon center and trainer can send his beloved pokemon to a trading block where he can swap it with other players pokemon or battle block if he wants to battle with other trainer.

    Features:
    - Trading ones pokemon to other logged in user/trainer.
    - 1v1 Battle with other user/trainer.
    - Battling with pokemon in the wild with the option to add that pokemon to the user if he manages to capture it using a pokeball.

    Goals:
    - My goal is to make the game functional where each user will feel secured with their account by providing them username, password, and trainer name. 
    - To further master manipulating the pokeapi to be set up at the game server. 
    - To figure out the battle system of the game and and the function of capturing and adding new pokemon from the wild to the user/trainer inventory.
    - Finally to implement user to user interaction via battle and trading system that can be seen even if logged out but can be joined if logged in.

    Challenges:
    - Authentication using JWT has been my kryptonite for the entire unit 3 and 4 so hoping to be immune from that after this project.
    - Trading and battling will be a challenge since it involves other user.


MVP:
  - Adding of pokeball with the pokemon inside it to the user's database is a must.
  - Interacting with other user via trading and battling is gonna be my highest MVP. 

  CLIENT:
  ![Logo](./image_readme/Homepage.png)
  - This is the login page, register page would look similar for this one too.

  ![Logo](./image_readme/trade.png)
  - This is the trading of 2 trainers will look like once logged in. If user is not logged in he can still see other users pokemon that are ready to be traded but he can not participate to it.

  ![Logo](./image_readme/battle.png)
  - This is the battle system in the game. UI with user vs user is also the same as user vs npc but in NPC there is an option to throw a pokeball.

  ![Logo](./image_readme/stuffs.png)
  - Pokemon center is one of the three navigations. It is a healthcare for pokemons where it would heal all pokemon of the user. View Pokemon will display all of user's pokemon, in it will also let you place your pokemon into trade block or battle block. Finally item shop to buy pokeballs and berries.

SERVER:
  ERD
![Logo](./image_readme/ERD1.png)

  API
 - https://pokeapi.co/api/v2/pokemon/
 - https://pokeapi.co/api/v2/berry/
 - https://pokeapi.co/api/v2/move/

  Dependencies
  - Front-end: React.js
    - Styling: CSS and Flexbox.
  - Back-end: Rails and postman.
  - Code Editor: vscode.
  - Web Browser: Google Chrome.

POST-MVP
  - Apply great animation to the pokemon attacks. Also make a ranking system based on number of wins per trainer. And add an experience system which will eventually evolve a pokemon once requirements are met. Make a new nav where trainers can just bond with their pokemon by throwing items.
  