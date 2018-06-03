class Player {
    constructor() {
        this.turn = 0;
        this.floor = 100;
        this.ai = {
            1: [
            ],
            2: [
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
            ],
            3: [
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
            ],
            4: [
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
            ],
            5: [
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "rescue",
                    direction: "forward",
                },
            ],
            6: [
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "rescue",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "rest",
                    direction: "forward",
                },
                {
                    name: "rest",
                    direction: "forward",
                },
                {
                    name: "rest",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
            ],
            7: [
                {
                    name: "pivot",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
            ],
            8: [
            ],
            9: [
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "attack",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "rescue",
                    direction: "forward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "shoot",
                    direction: "backward",
                },
                {
                    name: "shoot",
                    direction: "backward",
                },
                {
                    name: "shoot",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "rescue",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
                {
                    name: "walk",
                    direction: "backward",
                },
            ],
            12: [
                {
                    name: "walk",
                    direction: "forward",
                },
            ],
            58: [
                {
                    name: "walk",
                    direction: "forward",
                },
                {
                    name: "rescue",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
                {
                    name: "shoot",
                    direction: "forward",
                },
            ],
            100: [
            ],
        };
    }

// LEVEL 1
// ╔════════╗
// ║@      >║
// ╚════════╝

// LEVEL 2
// ╔════════╗
// ║@   s  >║
// ╚════════╝

// LEVEL 3
// ╔═════════╗
// ║@ s ss s>║
// ╚═════════╝

// LEVEL 4
// ╔═══════╗
// ║@ Sa S>║
// ╚═══════╝

// LEVEL 5
// ╔═══════╗
// ║@ CaaSC║
// ╚═══════╝

// LEVEL 6
// ╔════════╗
// ║C @ S aa║
// ╚════════╝

// LEVEL 7
// ╔══════╗
// ║>a S @║
// ╚══════╝

// LEVEL 8
// ╔══════╗
// ║@ Cww>║
// ╚══════╝

// LEVEL 9
// ╔═══════════╗
// ║>Ca  @ S wC║
// ╚═══════════╝


    playTurn(warrior) {
        if(this.floor === 100){
            if(warrior.feel('backward').isWall()){
                if(this.unitCount(warrior.look()) === 0){
                    warrior.think('LVL 1 or 2')
                    this.floor = 12
                } else if (this.unitCount(warrior.look()) === 1 && this.enemyCount(warrior.look()) === 1) {
                    warrior.think('LVL 3')
                    this.floor = 3
                } else if (this.enemyCount(warrior.look()) === 2) {
                    warrior.think('LVL 4')
                    this.floor = 4
                } else if (this.unitCount(warrior.look()) === 2 && this.enemyCount(warrior.look()) === 1){
                    warrior.think('LVL 5 or 8')
                    this.floor = 58
                }
            }else if (this.enemyCount(warrior.look('backward')) === 0) {
                warrior.think('LVL 6')
                this.floor = 6
            }else if (warrior.feel().isWall()) {
                warrior.think('LVL 7')
                this.floor = 7
            }else if (this.enemyCount(warrior.look('backward')) === 1 && this.enemyCount(warrior.look()) === 1) {
                warrior.think('LVL 9')
                this.floor = 9
            }
        }

        if(this.floor === 12 && this.turn === 1){
            if(this.unitCount(warrior.look()) === 0){
                warrior.think('LVL 1')
                this.floor = 1
            } else {
                warrior.think('LVL 2')
                this.floor = 2
            }
        }

        if(this.floor === 58 && this.turn === 4){
            if(this.unitCount(warrior.look()) === 0){
                warrior.think('LVL 8')
                this.floor = 8
            } else {
                warrior.think('LVL 5')
                this.floor = 5
            }
            this.turn = 0
        }

        if (this.turn > (this.ai[this.floor].length - 1)){
            warrior.think('FLOOR CLEARED, GOING UP')
            warrior.walk()
        }else{
            const action = this.ai[this.floor][this.turn]
            this.turn++
            this.doAction(action.name, action.direction, warrior)
        }
    }

    doAction(name, direction, warrior){
        switch (name) {
            case "walk":
                return(warrior.walk(direction));
                break;
            case "attack":
                return(warrior.attack(direction));
                break;
            case "rest":
                return(warrior.rest());
                break;
            case "shoot":
                return(warrior.shoot(direction));
                break;
            case "rescue":
                return(warrior.rescue(direction));
                break;
            case "pivot":
                return(warrior.pivot(direction));
                break;
            default:
        }
    }

    unitCount(spaces){
        let unitCount = 0
        spaces.forEach(function(space) {
            if(space.isUnit()){
                unitCount++
            }
        });
        return unitCount
    }

    enemyCount(spaces){
        let enemyCount = 0
        spaces.forEach(function(space) {
            if(space.isUnit() && space.getUnit().isEnemy()){
                enemyCount++
            }
        });
        return enemyCount
    }
}
