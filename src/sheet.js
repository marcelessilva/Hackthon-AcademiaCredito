import google from "googleapis"

const SHEET_ID = process.env.SHEET_ID || '1lJH-LiwtpmquZW7rNuzL5NIMRsQ4MUhyTcZa4cZcrME'
const SERVICE_ACCOUNT_EMAIL = process.env.SERVICE_ACCOUNT_EMAIL || ''
const SERVICE_ACCOUNT_PRIVATE_KEY = process.env.SERVICE_ACCOUNT_PRIVATE_KEY || ''

const auth = new google.Auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: SERVICE_ACCOUNT_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
})

const sheet = google.google.sheets("v4")

const appendToSheet = (data) => {
    sheet.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        auth: auth,
        range: "Sheet1",
        valueInputOption: "RAW",
        requestBody: {
            values: [[
                data['email'], 
                data['name']
            ]]
        }
    })
}

export default {
    appendToSheet: appendToSheet
}