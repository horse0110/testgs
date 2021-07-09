function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbwLklmmq1SRndeEg_p5kyNRV0YFB8046BiGQswyOUASDI3htS-eDGXx0_Jw0qdU-5gs/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {

            document.getElementById("app").textContent = d[0].status;

        });

    document.getElementById("btn").addEventListener("click", testGS);
}

