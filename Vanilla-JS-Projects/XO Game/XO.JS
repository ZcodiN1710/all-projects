const allBoxes = document.querySelectorAll(".box")
const title = document.querySelector("h1")


const audio = () => {
    const audio = document.getElementById("victory")
    audio.play()
}

let turn = "X"
allBoxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn == "X" && box.innerHTML == ""){
            box.innerHTML = "X"
            turn = "O"
            title.innerHTML = "O's turn"
        }
       else if( turn == "O" && box.innerHTML == ""){
           box.innerHTML = "O"
           turn = "X"
           title.innerHTML = "X's turn"
       }


       if (square1.innerHTML == "X" && square2.innerHTML == "X" && square3.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square1.style.background = "hotpink"
        square2.style.background = "hotpink"
        square3.style.background = "hotpink"
        audio()
       
       } else if(square1.innerHTML == "O" && square2.innerHTML == "O" && square3.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square1.style.background = "hotpink"
        square2.style.background = "hotpink"
        square3.style.background = "hotpink"
        audio()
       } 


       if (square4.innerHTML == "X" && square5.innerHTML == "X" && square6.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square4.style.background = "hotpink"
        square5.style.background = "hotpink"
        square6.style.background = "hotpink"
        audio()
       } else if(square4.innerHTML == "O" && square5.innerHTML == "O" && square6.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square4.style.background = "hotpink"
        square5.style.background = "hotpink"
        square6.style.background = "hotpink"
        audio()
       }


       if (square7.innerHTML == "X" && square8.innerHTML == "X" && square9.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square7.style.background = "hotpink"
        square8.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
       } else if(square7.innerHTML == "O" && square8.innerHTML == "O" && square9.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square7.style.background = "hotpink"
        square8.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
       } 


       if (square1.innerHTML == "X" && square4.innerHTML == "X" && square7.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square1.style.background = "hotpink"
        square4.style.background = "hotpink"
        square7.style.background = "hotpink"
        audio()
       }  else if(square1.innerHTML == "O" && square4.innerHTML == "O" && square7.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square1.style.background = "hotpink"
        square4.style.background = "hotpink"
        square7.style.background = "hotpink"
        audio()
    }


       if (square2.innerHTML == "X" && square5.innerHTML == "X" && square8.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square2.style.background = "hotpink"
        square5.style.background = "hotpink"
        square8.style.background = "hotpink"
        audio()
       }  else if(square2.innerHTML == "O" && square5.innerHTML == "O" && square8.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square2.style.background = "hotpink"
        square5.style.background = "hotpink"
        square8.style.background = "hotpink"
        audio()
    }


       if (square3.innerHTML == "X" && square6.innerHTML == "X" && square9.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square3.style.background = "hotpink"
        square6.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
       }  else if(square3.innerHTML == "O" && square6.innerHTML == "O" && square9.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square3.style.background = "hotpink"
        square6.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
    }

    if (square1.innerHTML == "X" && square5.innerHTML == "X" && square9.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square1.style.background = "hotpink"
        square5.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
       }  else if(square1.innerHTML == "O" && square5.innerHTML == "O" && square9.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square1.style.background = "hotpink"
        square5.style.background = "hotpink"
        square9.style.background = "hotpink"
        audio()
    }


    if (square3.innerHTML == "X" && square5.innerHTML == "X" && square7.innerHTML == "X") {
        title.innerHTML = "X WINS!"
        square3.style.background = "hotpink"
        square5.style.background = "hotpink"
        square7.style.background = "hotpink"
        audio()
       }  else if(square3.innerHTML == "O" && square5.innerHTML == "O" && square7.innerHTML == "O"){
        title.innerHTML = "O WINS!"
        square3.style.background = "hotpink"
        square5.style.background = "hotpink"
        square7.style.background = "hotpink"
        audio()
    }
    })
});


document.querySelector("button").onclick = () => {
    window.location.reload()
}