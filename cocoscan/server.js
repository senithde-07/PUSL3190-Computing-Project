const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const util = require("util");

const app = express();
const port = 3001; 


const connection = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "", 
  database: "cocoscan",
});


const query = util.promisify(connection.query).bind(connection);


app.use(bodyParser.json());
app.use(cors());

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    throw err; 
  }
  console.log("Connected to MySQL database");
});


app.post("/api/submitData/", async (req, res) => {
  const { lan, lon, catgeory, district, note, name, mobile, address } =
    req.body;

  try {
    
    const lastClientIdQuery =
      "SELECT MAX(client_id) AS maxClientId FROM clients";
    const [maxClientIdRow] = await query(lastClientIdQuery);

    let nextClientId = 1;
    if (maxClientIdRow && maxClientIdRow.maxClientId !== null) {
      nextClientId = maxClientIdRow.maxClientId + 1;
    }

    
    const clientData = { client_id: nextClientId, name, mobile, address };
    await query("INSERT INTO clients SET ?", clientData);

    
    const locationData = {
      client_id: nextClientId,
      lan,
      lon,
      catgeory,
      district,
      note,
    };
    await query("INSERT INTO locations SET ?", locationData);

    console.log("Form data submitted successfully");
    res.send("Form data submitted successfully");
  } catch (error) {
    console.error("Error submitting form data:", error);
    res.status(500).send("Error submitting form data");
  }
});


app.post("/api/ip", async (req, res) => {
  const { ip } = req.body;

  try {
    
    await query("INSERT INTO visits (ip) VALUES (?)", [ip]);

    console.log("IP address saved successfully:", ip);
    res.send("IP address saved successfully");
  } catch (error) {
    console.error("Error saving IP address:", error);
    res.status(500).send("Error saving IP address");
  }
});

app.get("/api/datalist", async (req, res) => {
  try {
    
    const locationData = await query(`
      SELECT locations.*, category.category_name 
      FROM locations 
      INNER JOIN category ON locations.catgeory = category.category_code
    `);

    console.log("Location data fetched successfully");
    res.json(locationData);
  } catch (error) {
    console.error("Error fetching location data:", error);
    res.status(500).send("Error fetching location data");
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
