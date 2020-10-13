$(document).ready(() => {
    let rectangleArray = [];
    let parentDiv = document.createElement("div");
    let createShapebox = document.getElementById("canvas")
    createShapebox.appendChild(parentDiv);
    parentDiv.classList.add("shapeBox");

    class Rectangle {
        constructor(recHeightval, recWidthval) {
            this.recHeightval = recHeightval;
            this.recWidthval = recWidthval;
            this.div = document.createElement("div");
            this.div.classList.add("rectangle")
            parentDiv.appendChild(this.div);
            $(".rectangle").css({ 'height': `${this.recHeightval}px` });
            $(".rectangle").css({ 'width': `${this.recWidthval}px` });
            $(".rectangle").css({'left': (Math.floor(Math.random() * 60) + 1), 'top': (Math.floor(Math.random() * 60) + 1)});
            this.div.addEventListener ("click", () => {
                this.clearDesc();
                this.recDesc();
            });
            this.div.addEventListener("dblclick", () => {
                this.clearDesc();
                this.div.remove();
            });
        }
        clearDesc() {
            document.getElementById("shapeDesc").setAttribute("value", "");
            document.getElementById("widthDesc").setAttribute("value", "");
            document.getElementById("heightDesc").setAttribute("value", "");
            document.getElementById("radiusDesc").setAttribute("value", "");
            document.getElementById("areaDesc").setAttribute("value", "");
            document.getElementById("perimeterDesc").setAttribute("value", "");
        }
        recDesc() {
            this.shapeName = "Rectangle";
            this.radius = "N/A";
            this.perimeter = 2 * (parseInt(this.recHeightval) + parseInt(this.recWidthval));
            this.area = (this.recHeightval * this.recWidthval);
            document.getElementById("shapeDesc").setAttribute("value", `${this.shapeName}`);
            document.getElementById("widthDesc").setAttribute("value", `${this.recWidthval}`);
            document.getElementById("heightDesc").setAttribute("value", `${this.recHeightval}`);
            document.getElementById("radiusDesc").setAttribute("value", `${this.radius}`);
            document.getElementById("areaDesc").setAttribute("value", `${this.area}`);
            document.getElementById("perimeterDesc").setAttribute("value", `${this.perimeter}`);
        }
    }

    class Square {
        constructor(recsideL) {
            this.recsideL = recsideL;
            this.div = document.createElement("div");
            this.div.classList.add("square");
            parentDiv.appendChild(this.div);
            $(".square").css({ 'height': `${this.recsideL}px` });
            $(".square").css({ 'width': `${this.recsideL}px` });
            $(".square").css({'left': (Math.floor(Math.random() * 60) + 1), 'top': (Math.floor(Math.random() * 60) + 1)});
            this.div.addEventListener ("click", () => {
                this.clearDesc();
                this.sqrDesc();
            });
            this.div.addEventListener("dblclick", () => {
                this.clearDesc();
                this.div.remove();
            });
        }
        clearDesc() {
            document.getElementById("shapeDesc").setAttribute("value", "");
            document.getElementById("widthDesc").setAttribute("value", "");
            document.getElementById("heightDesc").setAttribute("value", "");
            document.getElementById("radiusDesc").setAttribute("value", "");
            document.getElementById("areaDesc").setAttribute("value", "");
            document.getElementById("perimeterDesc").setAttribute("value", "");
        }
        sqrDesc() {
            this.shapeName = "Square";
            this.radius = "N/A";
            this.perimeter = (4 * this.recsideL);
            this.area = (this.recsideL * this.recsideL);
            document.getElementById("shapeDesc").setAttribute("value", `${this.shapeName}`);
            document.getElementById("widthDesc").setAttribute("value", `${this.recsideL}`);
            document.getElementById("heightDesc").setAttribute("value", `${this.recsideL}`);
            document.getElementById("radiusDesc").setAttribute("value", `${this.radius}`);
            document.getElementById("areaDesc").setAttribute("value", `${this.area}`);
            document.getElementById("perimeterDesc").setAttribute("value", `${this.perimeter}`);
        }
    }

    class Circle {
        constructor(recDiam) {
            this.recRadius = recDiam / 2;
            this.div = document.createElement("div");
            this.div.classList.add("circle");
            parentDiv.appendChild(this.div);
            $(".circle").css({ 'height': `${this.recRadius}px` });
            $(".circle").css({ 'width': `${this.recRadius}px` });
            $(".circle").css({'left': (Math.floor(Math.random() * 60) + 1), 'top': (Math.floor(Math.random() * 60) + 1)});
            this.div.addEventListener ("click", () => {
                this.clearDesc();
                this.cirDesc();
            });
            this.div.addEventListener("dblclick", () => {
                this.clearDesc();
                this.div.remove();
            });
        }
        clearDesc() {
            document.getElementById("shapeDesc").setAttribute("value", "");
            document.getElementById("widthDesc").setAttribute("value", "");
            document.getElementById("heightDesc").setAttribute("value", "");
            document.getElementById("radiusDesc").setAttribute("value", "");
            document.getElementById("areaDesc").setAttribute("value", "");
            document.getElementById("perimeterDesc").setAttribute("value", "");
        }
        cirDesc() {
            this.shapeName = "Circle";
            this.recWidthval = "N/A";
            this.recHeightval = "N/A";
            this.radius = this.recRadius;
            this.perimeter = (2 * 3.1416 * this.recRadius);
            this.area = ( 3.1416 * (this.recRadius * this.recRadius));
            document.getElementById("shapeDesc").setAttribute("value", `${this.shapeName}`);
            document.getElementById("widthDesc").setAttribute("value", `${this.recWidthval}`);
            document.getElementById("heightDesc").setAttribute("value", `${this.recHeightval}`);
            document.getElementById("radiusDesc").setAttribute("value", `${this.radius}`);
            document.getElementById("areaDesc").setAttribute("value", `${this.area.toFixed(2)}`);
            document.getElementById("perimeterDesc").setAttribute("value", `${this.perimeter.toFixed(2)}`);
        }
    }

    class Triangle {
        constructor(recTriHeight) {
            this.recTriHeight = recTriHeight;
            this.div = document.createElement("div");
            this.div.classList.add("triangle");
            parentDiv.appendChild(this.div);
            $(".triangle").css({ 'border-bottom': `${this.recTriHeight}px solid yellow` });
            $(".triangle").css({ 'border-right': `${this.recTriHeight}px solid transparent` });
            $(".triangle").css({'left': (Math.floor(Math.random() * 60) + 1), 'top': (Math.floor(Math.random() * 60) + 1)});
            this.div.addEventListener ("click", () => {
                this.clearDesc();
                this.triDesc();
            });
            this.div.addEventListener("dblclick", () => {
                this.clearDesc();
                this.div.remove();
            });
        }
        clearDesc() {
            document.getElementById("shapeDesc").setAttribute("value", "");
            document.getElementById("widthDesc").setAttribute("value", "");
            document.getElementById("heightDesc").setAttribute("value", "");
            document.getElementById("radiusDesc").setAttribute("value", "");
            document.getElementById("areaDesc").setAttribute("value", "");
            document.getElementById("perimeterDesc").setAttribute("value", "");
        }
        triDesc() {
            this.shapeName = "Triangle";
            this.recWidthval = this.recTriHeight;
            this.recHeightval = this.recTriHeight;
            this.radius = "N/A";
            this.perimeter = (parseInt(this.recTriHeight) * 2) + Math.sqrt(
                (parseInt(this.recTriHeight) * parseInt(this.recTriHeight)) +
                (parseInt(this.recTriHeight) * parseInt(this.recTriHeight))
                );
            this.area = ( 0.5 * (this.recTriHeight * this.recTriHeight));
            document.getElementById("shapeDesc").setAttribute("value", `${this.shapeName}`);
            document.getElementById("widthDesc").setAttribute("value", `${this.recWidthval}`);
            document.getElementById("heightDesc").setAttribute("value", `${this.recHeightval}`);
            document.getElementById("radiusDesc").setAttribute("value", `${this.radius}`);
            document.getElementById("areaDesc").setAttribute("value", `${this.area.toFixed(2)}`);
            document.getElementById("perimeterDesc").setAttribute("value", `${this.perimeter.toFixed(2)}`);
        }
    }

    //creates new Instance of Rectangle
    $(() => {
        $('#btnSubmitRec').click(() => {
            let newRectangle = new Rectangle($("#recHeight").val(), $("#recWidth").val());
        });
    });
    //creates new Instance of Square
    $(() => {
        $('#btnSubmitSqr').click(() => {
            let newSquare = new Square($("#recsideL").val());
        });
    });
    //createst new Instance of Circle
    $(() => {
        $('#btnSubmitCir').click(() => {
            let newCircle = new Circle($("#recDiam").val());
        });
    });
    //createst new Instance of Triangle
    $(() => {
        $('#btnSubmitTri').click(() => {
            let newTriangle = new Triangle($("#recTriHeight").val());
        });
    });

});