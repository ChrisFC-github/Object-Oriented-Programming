document.addEventListener("DOMContentLoaded", function () { // DOM CONTENT loaded with callback function so body doesnt return as null ! DO THIS FIRST
    let diceArr = [];
    let button = document.getElementsByClassName("buttons");
    let parentDiv = document.createElement("div");
    let answer = 0;
    document.body.appendChild(parentDiv);
    parentDiv.classList.add("container", "d-flex", "justify-content-around", "row");

    class Die {
        constructor (value) {
            this.value = value;
            this.div = document.createElement("div");
            this.div.classList.add("square", "d-flex", "justify-content-around");
            this.div.innerHTML = this.value;
            this.div.addEventListener ("click", () => {
                this.roll();
            });
            this.div.addEventListener ("dblclick", () => {
                let index = diceArr.indexOf(this.div.innerHTML);
                diceArr.splice(index, 1);
                this.div.remove();
                console.log(diceArr)
            });    
            parentDiv.appendChild(this.div);
            diceArr.push(this);
        }
        roll() {
            this.value = (Math.floor(Math.random() * 6) + 1);
            this.div.innerHTML = "";
            this.div.innerHTML = this.value;
        }
        sum() {
            answer = answer + this.value;
        }
    }
    //creates new die
    button[0].addEventListener("click", () => {
        let newDie = new Die(Math.floor(Math.random() * 6) + 1);
    });
    //rolls created dies and randomizes numbers 
    button[1].addEventListener("click", () => {
        diceArr.forEach(die => {
            die.roll();
        });
    });
    //sums dies even when dies are deleted or created
    button[2].addEventListener("click", () => {
        diceArr.forEach(die => {
            die.sum();
        });
        alert(`sum is ${answer}`);
        answer = 0;
    });
});