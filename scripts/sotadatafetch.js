async function get() {
    const response = await fetch("https://sotl.as/api/activations/S50LO");
    const jsonData = await response.json();
    console.log(jsonData);
    let p = 0;

    jsonData.forEach(element => {
        p += element.points;
    });

    console.log(p)

    $("#ap").text(p);
  }  


get();