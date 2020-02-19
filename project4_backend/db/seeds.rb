
#drop_table(Pokedex)

Pokemon.create!(name: 'Bulbasaur', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", level: 50, health: 275, current_health: 275, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 1)
Move.create!(name: 'Vine Whip', power: 55, pokemon_id: 1)
Move.create!(name: 'Bite', power: 35, pokemon_id: 1)
Move.create!(name: 'Growth', power: 0, pokemon_id: 1)

Pokemon.create!(name: 'Ivysaur', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", level: 50, health: 300, current_health: 300, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 2)
Move.create!(name: 'Vine Whip', power: 55, pokemon_id: 2)
Move.create!(name: 'Razor Leaf', power: 65, pokemon_id: 2)
Move.create!(name: 'Bite', power: 45, pokemon_id: 2)

Pokemon.create!(name: 'Venosaur', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", level: 50, health: 325, current_health: 325, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 3)
Move.create!(name: 'Vine Whip', power: 55, pokemon_id: 3)
Move.create!(name: 'Razor Leaf', power: 65, pokemon_id: 3)
Move.create!(name: 'Solar Beam!', power: 120, pokemon_id:3)
#
#
Pokemon.create!(name: 'Charmander', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png", level: 50, health: 275, current_health: 275, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 4)
Move.create!(name: 'Ember', power: 55, pokemon_id: 4)
Move.create!(name: 'Bite', power: 45, pokemon_id: 4)
Move.create!(name: 'Tail Whip', power: 0, pokemon_id: 4)
#

Pokemon.create!(name: 'Charmeleon', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png", level: 50, health: 300, current_health: 300, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 5)
Move.create!(name: 'Bite', power: 45, pokemon_id: 5)
Move.create!(name: 'Ember', power: 55, pokemon_id: 5)
Move.create!(name: 'Flame Thrower', power: 65, pokemon_id: 5)
#
#
Pokemon.create!(name: 'Charizard', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png", level: 50, health: 325, current_health: 325, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 6)
Move.create!(name: 'Ember', power: 55, pokemon_id:6)
Move.create!(name: 'Flame Thrower', power: 65, pokemon_id: 6)
Move.create!(name: 'Fire Blast!', power: 120, pokemon_id: 6)
#
##
#
Pokemon.create!(name: 'Squirtle', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", level: 50, health: 275, current_health: 275, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 7)
Move.create!(name: 'Water Gun', power: 55, pokemon_id: 7)
Move.create!(name: 'Bite', power: 45, pokemon_id: 7)
Move.create!(name: 'Tail Whip', power: 0, pokemon_id: 7)
#
#
#
Pokemon.create!(name: 'Wartortle', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png", level: 50, health: 300, current_health: 300, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 8)
Move.create!(name: 'Bite', power: 45, pokemon_id: 8)
Move.create!(name: 'Water Gun', power: 55, pokemon_id: 8)
Move.create!(name: 'Surf', power: 65, pokemon_id: 8)
#
#
Pokemon.create!(name: 'Blastoise', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png", level: 50, health: 325, current_health: 325, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 9)
Move.create!(name: 'Water Gun', power: 55, pokemon_id: 9)
Move.create!(name: 'Surf', power: 65, pokemon_id: 9)
Move.create!(name: 'Hydro Pump!', power: 120, pokemon_id: 9)
#
#
Pokemon.create!(name: 'Caterpie', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png", level: 50, health: 275, current_health: 275, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 10)
Move.create!(name: 'String Shot', power: 0, pokemon_id: 10)
Move.create!(name: 'Bind', power: 35, pokemon_id: 10)
Move.create!(name: 'Harden', power: 0, pokemon_id: 10)

Pokemon.create!(name: 'Metapod', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png", level: 50, health: 300, current_health: 300, created_by: 1)
Move.create!(name: 'Tackle', power: 50, pokemon_id: 11)
Move.create!(name: 'Harden', power: 0, pokemon_id: 11)
Move.create!(name: 'Harden', power: 0, pokemon_id: 11)
Move.create!(name: 'Bind', power: 35, pokemon_id: 11)

Pokemon.create!(name: 'Butterfree', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png", level: 50, health: 310, current_health: 310,created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 12)
Move.create!(name: 'Sleep Powder', power: 10, pokemon_id: 12)
Move.create!(name: 'Super Sonice', power: 45, pokemon_id: 12)
Move.create!(name: 'Psybeam', power: 65, pokemon_id: 12)
#
#
Pokemon.create!(name: 'Weedle', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png", level: 50, health: 275, current_health: 275, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 13)
Move.create!(name: 'String shot', power: 0, pokemon_id: 13)
Move.create!(name: 'Bind', power: 35, pokemon_id: 13)
Move.create!(name: 'Harden', power: 0, pokemon_id: 13)
##
#Pokemon.create!(name: 'Kakuna', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png", level: 50, health: 300, created_by: 1)
#Move.create!(name: 'Tackle', power: 50, pokemon_id: 13)
##
##
Pokemon.create!(name: 'Beedrill', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png", level: 50, health: 310, current_health: 310, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 14)
Move.create!(name: 'Sludge', power: 15, pokemon_id: 14)
Move.create!(name: 'Poison', power: 45, pokemon_id: 14)
Move.create!(name: 'Poison Sting', power: 65, pokemon_id: 14)
#
Pokemon.create!(name: 'Pikachu', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png", level: 50, health: 300, current_health: 300, created_by: 1)
Move.create!(name: 'Quick Attack', power: 55, pokemon_id: 15)
Move.create!(name: 'Iron Tail', power: 55, pokemon_id: 15)
Move.create!(name: 'Thunber Bolt', power: 65, pokemon_id: 15)
Move.create!(name: 'Thunder!', power: 120, pokemon_id: 15)
#
Pokemon.create!(name: 'Nidoking', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png", level: 50, health: 315, current_health: 315, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 16)
Move.create!(name: 'Bind', power: 55, pokemon_id: 16)
Move.create!(name: 'Posion Sting', power: 50, pokemon_id: 16)
Move.create!(name: 'Earth Quake', power: 100, pokemon_id: 16)
#
Pokemon.create!(name: 'Nidoqueen', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png", level: 50, health: 315, current_health: 315, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 17)
Move.create!(name: 'Posion Sting', power: 50, pokemon_id: 17)
Move.create!(name: 'Earth Quake', power: 100, pokemon_id: 17)
Move.create!(name: 'Bind', power: 55, pokemon_id: 17)
#
#
Pokemon.create!(name: 'Arcanine', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png", level: 50, health: 325, current_health: 325, created_by: 1)
Move.create!(name: 'Take Down', power: 45, pokemon_id: 18)
Move.create!(name: 'Ember', power: 45, pokemon_id: 18)
Move.create!(name: 'Flame Wheel', power: 55, pokemon_id: 18)
Move.create!(name: 'Fire Blast!', power: 120, pokemon_id: 18)
#
#
#
Pokemon.create!(name: 'Kadabra', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png", level: 50, health: 310, current_health: 310, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 19)
Move.create!(name: 'Psywave', power: 45, pokemon_id: 19)
Move.create!(name: 'Psybeam', power: 55, pokemon_id: 19)
Move.create!(name: 'Psychic', power: 100, pokemon_id: 19)
#
Pokemon.create!(name: 'Magikarp', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png", level: 50, health: 250, current_health: 250, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 20)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
#
Pokemon.create!(name: 'Magikarp', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png", level: 50, health: 250, current_health: 250, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 21)
Move.create!(name: 'Splash', power: 0, pokemon_id: 21)
Move.create!(name: 'Splash', power: 0, pokemon_id: 21)
Move.create!(name: 'Splash', power: 0, pokemon_id: 21)
#
Pokemon.create!(name: 'Magikarp', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png", level: 50, health: 250, current_health: 250, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 22)
Move.create!(name: 'Splash', power: 0, pokemon_id: 22)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
#
Pokemon.create!(name: 'Magikarp', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png", level: 50, health: 250, current_health: 250, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 23)
Move.create!(name: 'Splash', power: 0, pokemon_id: 23)
#
Pokemon.create!(name: 'Magikarp', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png", level: 50, health: 250, current_health: 250, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 24)
Move.create!(name: 'Splash', power: 0, pokemon_id: 24)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
Move.create!(name: 'Splash', power: 0, pokemon_id: 20)
#
Pokemon.create!(name: 'Dragonite', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png", level: 50, health: 340, current_health: 340, created_by: 1)
Move.create!(name: 'Tackle', power: 35, pokemon_id: 25)
Move.create!(name: 'Dragon Rage', power: 45, pokemon_id: 25)
Move.create!(name: 'Dragon Claw', power: 75, pokemon_id: 25)
Move.create!(name: 'Hyper Beam!', power: 150, pokemon_id: 25)
#
#
Pokemon.create!(name: 'Mewtwo', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png", level: 50, health: 400, current_health: 400, created_by: 1)
Move.create!(name: 'Stare', power: 0, pokemon_id: 26)
Move.create!(name: 'Shadow Ball', power: 25, pokemon_id: 26)
Move.create!(name: 'PSYCHO BOOST', power: 140, pokemon_id: 26)
Move.create!(name: 'Psychic', power: 300, pokemon_id: 26)
#
##
##
User.create!(name: "admin", trainername: "admin", password: "admin")

#User.create!(name: "NPC", trainername: "NPC", password: "123")
#Pokemon.create!(name: 'Butterfree', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png", level: 50, health: 310,created_by: 2)
#Move.create!(name: 'Tackle', power: 35, pokemon_id: 27)
#Move.create!(name: 'Sleep Powder', power: 10, pokemon_id: 27)
#Move.create!(name: 'Super Sonice', power: 45, pokemon_id: 27)
#Move.create!(name: 'Psybeam', power: 65, pokemon_id: 27)

#Pokemon.create!(name: 'Squirtle', frontimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", backimage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", level: 50, health: 275, created_by: 1)
#Move.create!(name: 'Tackle', power: 35, pokemon_id: 7)
#Move.create!(name: 'Water Gun', power: 55, pokemon_id: 7)
#Move.create!(name: 'Bite', power: 45, pokemon_id: 7)
#Move.create!(name: 'Tail Whip', power: 0, pokemon_id: 7)
#
#
##Pokemon.destroy_all
#
#
#
#
#
