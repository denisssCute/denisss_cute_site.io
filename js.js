let ask = document.getElementById("finish")

ask.addEventListener('click', checkTest)

function checkTest() {
    let ask = 0

    let ask1 =  document.getElementById("q1").value
    if (ask1 === "4") {
        ask++
    }

    let ask2 =  document.getElementById("q2").value
    if (ask2 === "6") {
        ask++
    }

    let ask3 =  document.getElementById("q3").value
    if (ask3 === "2") {
        ask++
    }

    let ask4 =  document.getElementById("q4").value
    if (ask4 === "8") {
        ask++
    }

    let ask5 =  document.getElementById("q5").value
    if (ask5 === "10") {
        ask++
    }
    let ask6 =  document.getElementById("q6").value
    if (ask6 === "12") {
        ask++
    }

    let ask7 =  document.getElementById("q7").value
    if (ask7 === "1") {
        ask++
    }

    let ask8 =  document.getElementById("q8").value
    if (ask8 === "9") {
        ask++
    }

    let ask9 =  document.getElementById("q9").value
    if (ask9 === "9") {
        ask++
    }

    let ask10 =  document.getElementById("q10").value
    if (ask10 === "10") {
        ask++
    }
alert('Количество правильных ответов равно '+ ask +'.')
}
