const display = document.createElement("h1");

setTimeout(() => {
    display.innerText = "10";
    console.log("10");
    setTimeout(() => {
        display.innerText = "9";
        console.log("9");
        setTimeout(() => {
            display.innerText = "8";
            console.log("8");
            setTimeout(() => {
                display.innerText = "7";
                console.log("7");
                setTimeout(() => {
                    display.innerText = "6";
                    console.log("6");
                    setTimeout(() => {
                        display.innerText = "5";
                        console.log("5");
                        setTimeout(() => {
                            display.innerText = "4";
                            console.log("4");
                            setTimeout(() => {
                                display.innerText = "3";
                                console.log("3");
                                setTimeout(() => {
                                    display.innerText = "2";
                                    console.log("2");
                                    setTimeout(() => {
                                        display.innerText = "1";
                                        console.log("1");
                                        setTimeout(() => {
                                            display.innerText = "HAPPIE NEW YEAR";
                                            console.log("HAPPIE NEW YEAR");
                                        }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

document.body.append(display);
