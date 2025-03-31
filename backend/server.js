const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const snowflake = require("snowflake-sdk");
require("dotenv").config();

const app = express();
const upload = multer({ dest: "uploads/" });

// Prisijungimas prie Snowflake
const connection = snowflake.createConnection({
  account: "fn36876.eu-north-1.aws",
  username: "dbConnection",
  password: "dbConnection1.",
  database: "ND2",
  schema: "PUBLIC",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Nepavyko prisijungti prie Snowflake:", err.message);
  } else {
    console.log("✅ Prisijungta prie Snowflake!");
  }
});

// TXT ir TTL konvertavimas į JSON
const parseUnstructuredData = (filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
  
    // Split the file into lines and trim leading/trailing spaces
    const lines = content.split("\n").map((line) => line.trim());
  
    return lines
      .filter((line) => line.length > 0) // Remove any empty lines
      .map((line) => {
        // Split by any amount of space or tab (handle irregular spaces or tabs)
        const parts = line.split(/\s+/); // \s+ means split by any sequence of space characters
  
        // Check if we have enough parts, otherwise, handle with defaults
        return {
          name: parts[0] || "Nežinomas", // First column
          position: parts[1] || "Nežinomas",   // Second column
          salary: parts[2] ? parseFloat(parts[2]) : 0, // Third column, assuming salary is a number
          hire_date: parts[3] || "1970-01-01", // Fourth column, assuming hire_date is the fourth field
          department: parts[4] || "Nežinomas", // Fifth column, assuming department is the fifth field
        };
      });
  };
  

// CSV analizavimas
const parseCSV = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n").map((line) => line.trim());
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return headers.reduce((obj, key, index) => {
      obj[key.trim()] = values[index] ? values[index].trim() : null;
      return obj;
    }, {});
  });
};

// Failų įkėlimo maršrutas
app.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Nepasirinktas failas!" });
  }

  const filePath = req.file.path;
  const fileType = path.extname(req.file.originalname).toLowerCase();
  let structuredData = [];

  try {
    if (fileType === ".csv") {
      structuredData = parseCSV(filePath);
    } else if (fileType === ".txt" || fileType === ".ttl") {
      structuredData = parseUnstructuredData(filePath);
    } else {
      return res.status(400).json({ message: "Nepalaikomas failo formatas!" });
    }

    // Įkeliame duomenis į Snowflake
    for (const employee of structuredData) {
        const salary = employee.salary ? employee.salary : 0; // Jei null → 0
        const hireDate = employee.hire_date ? `'${employee.hire_date}'` : "NULL"; // Jei null → NULL
      
        const query = `INSERT INTO employees (name, position, salary, hire_date)
                       VALUES ('${employee.name}', '${employee.position}', ${salary}, ${hireDate})`;
      
        connection.execute({
          sqlText: query,
          complete: (err) => {
            if (err) {
              console.error("❌ Klaida įkeliant į Snowflake:", err.message);
            }
          },
        });
      }
      
    res.json({ message: "Failas apdorotas ir duomenys įkelti!" });
  } catch (error) {
    console.error("❌ Apdorojimo klaida:", error);
    res.status(500).json({ message: "Nepavyko apdoroti failo!" });
  } finally {
    fs.unlinkSync(filePath);
  }
});
app.use(cors());
app.listen(3001, () => console.log("🚀 Serveris veikia 3001 porte"));
