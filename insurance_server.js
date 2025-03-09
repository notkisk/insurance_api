require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use MySQL Connection Pool
const insuranceDb = mysql.createPool({
    host: process.env.INS_DB_HOST, 
    user: process.env.INS_DB_USER,
    password: process.env.INS_DB_PASSWORD || "",
    database: process.env.INS_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// ✅ No need for manual `.connect()` — pools handle connections automatically

// ✅ Insurance details by license plate
app.get('/api/insurance/:plate', async (req, res) => {
    const plate = req.params.plate;

    try {
        const [results] = await insuranceDb.promise().query(
            'SELECT insurance_start, insurance_end FROM insurance WHERE license_plate = ?',
            [plate]
        );

        if (results.length === 0) {
            return res.status(404).json({ message: "No insurance found" });
        }

        res.json(results[0]);

    } catch (err) {
        console.error("❌ Insurance DB Query Error:", err.message);
        res.status(500).json({ error: "Database error" });
    }
});

// Start server
const PORT = 5003;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Insurance API running on port ${PORT}`);
});
