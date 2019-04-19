new Vue({
    el: '#app',
    data: {
        running: false,
        pokemonLife1: 100,
        pokemonLife2: 100,
        logs: [],

    },
    computed: {
        hasResult() {
            return this.pokemonLife1 == 0 || this.pokemonLife2 == 0
        }
    },
    methods: {
        startBattle() {
            this.running = true
            this.pokemonLife1 = 100
            this.pokemonLife2 = 100
            this.logs = []

        },
        /* 	begin volt tackle */
        attack(voltTackle) {
            this.hurt('pokemonLife2', 5, 10, voltTackle, 'Volt Tackle', 'Pikachu', 'Latios', 'pokemon1')
            if (this.pokemonLife2 > 0) {
                this.hurt('pokemonLife1', 7, 12, false, 'Giga Impact', 'Latios', 'Pikachu', 'pokemon2')
            }
        },

        hurt(atr, min, max, voltTackle, attack, source, target, cls) {
            const plus = voltTackle ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} used ${attack}! 
            ${target} lost ${hurt} HP!`, cls)
        },

        /* finish volt tackle */

        /* 	begin Quick Attack */
        attack1(quickAttack) {
            this.hurt('pokemonLife2', 5, 10, quickAttack, 'Quick Attack', 'Pikachu', 'Latios', 'pokemon1')
            if (this.pokemonLife2 > 0) {
                this.hurt('pokemonLife1', 7, 12, false, 'Luster Purge', 'Latios', 'Pikachu', 'pokemon2')
            }
        },

        hurt1(atr, min, max, quickAttack, attack, source, target, cls) {
            const plus = quickAttack ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} used ${attack}! 
            ${target} lost ${hurt} HP!`, cls)
        },

        /* finish Quick Attack */

        /* 	begin ironTail */

        attack3(ironTail) {
            this.hurt('pokemonLife2', 5, 10, ironTail, 'Iron Tail', 'Pikachu', 'Latios', 'pokemon1')
            if (this.pokemonLife2 > 0) {
                this.hurt('pokemonLife1', 7, 12, false, 'Giga Impact', 'Latios', 'Pikachu', 'pokemon2')
            }
        },

        hurt3(atr, min, max, ironTail, attack, source, target, cls) {
            const plus = ironTail ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} used ${attack}! 
            ${target} lost ${hurt} HP!`, cls)
        },

        /* Finish ironTail */

        /* 	Begin thunderBolt */

        attack2(thunderBolt) {
            this.hurt('pokemonLife2', 5, 10, thunderBolt, 'Thunder Bolt', 'Pikachu', 'Latios', 'pokemon1')
            if (this.pokemonLife2 > 0) {
                this.hurt('pokemonLife1', 7, 12, false, 'Luster Purge', 'Latios', 'Pikachu', 'pokemon2')
            }
        },

        hurt2(atr, min, max, thunderBolt, attack, source, target, cls) {
            const plus = thunderBolt ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} used ${attack}! 
            ${target} lost ${hurt} HP!`, cls)
        },

        /* Finish thunderBolt */

        /* Begin Heals */
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('pokemonLife1', 7, 12, false, 'Giga Impact', 'Latios', 'Pikachu', 'pokemon2')
        },

        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.pokemonLife1 = Math.min(this.pokemonLife1 + heal, 100)
            this.registerLog(`Pikachu restored ${heal} HP using HP Potion.`, 'pokemon1')
        },

        /* Finish Heals */

        /* Begin Random Math */

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        /* Finish Random Math */

        /* Begin Logs */

        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },

        /* Finish logs */
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})