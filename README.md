
# 🛡️ Insurance API - Vehicle Insurance Information Service

This is a simple REST API that allows police officers to check insurance validity details of a vehicle using the license plate number. It is intended to be used in conjunction with the Police API.

## 📦 Features

- Fetch insurance start and end date by license plate
- CORS support
- MySQL Database connection

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL (phpMyAdmin)
- dotenv for environment variable management

## 📂 Folder Structure
```
/insurance-api
  ├── insurance.js
  ├── .env
  ├── package.json
  └── ...
```

## 📄 Environment Variables (`.env`)

Make sure to create a `.env` file with the following variables:

```
INS_DB_HOST=your_insurance_db_host
INS_DB_USER=your_insurance_db_user
INS_DB_PASSWORD=your_insurance_db_password
INS_DB_NAME=your_insurance_db_name
```

## 🚀 Running the App Locally

```bash
npm install
node insurance.js
```

Ensure your insurance database is running and accessible.

## 📮 API Endpoint

- `GET /api/insurance/:plate` → Returns `insurance_start` and `insurance_end` for a given license plate.

Example response:
```json
{
  "insurance_start": "2025-01-01",
  "insurance_end": "2026-01-01"
}
```

## 🔒 License

MIT License – Free to use, modify, and distribute.
