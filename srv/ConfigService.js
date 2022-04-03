const cds = require('@sap/cds')
const XLSX = require('xlsx');
const { Config } = cds.entities("cpapp.industry");

const jsonData = [
    { name: 'Diary', code: 'diary_code', author: 'Pagorn' },
    { name: 'Note', code: 'note_code', author: 'Pagorn' },
    { name: 'Medium', code: 'medium_code', author: 'Pagorn' },
]


this.check = 1;
this.counter = 1;
this.not_allowed_project_id = 'dummy';

// CREATE for POST request
// READ for GET request
module.exports = srv => {
    srv.before("CREATE", "CreateConfig", (req, res) => {
        console.log(req.data);
        if (req.data['config_1'] === this.check) req.error(500, "Config Cannot be 1");
        if (req.data['project_id'] === this.not_allowed_project_id) req.error(500, "dummy project id not allowed");
    });

    srv.after("READ", "GetConfig", data => {
        console.log(data);
        console.log(data.length);
        if (typeof data.length === "undefined") {
            new_data = []
            new_data.push(data);
        } else {
            new_data = data;
        }
        const workSheet = XLSX.utils.json_to_sheet(new_data);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
        XLSX.writeFile(workBook, "./sample_" + String(this.counter) + ".xlsx");
        this.counter += 1
    });
};