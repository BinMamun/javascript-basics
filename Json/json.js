async function change_mySelete(sel) {
    const dbParam = JSON.stringify({ table: sel, limit: 20 });

    const responce = await fetch("json_demo_html_table.php", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "x=" + dbParam,
    });

    myObj = await responce.json();

    let text = "";
    text = "<table border='1'>";
    for (x in myObj) {
      text += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    text += "</table>";
    document.getElementById("valueTable").innerHTML = text;
  }