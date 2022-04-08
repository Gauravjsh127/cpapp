const cds = require("@sap/cds");
const { Data, Config, Result } = cds.entities("cpapp.db");


module.exports = srv => {
    srv.on("runmodel", async(req, res) => {
        let project_id = req.data.project_id
        console.log(project_id);
        // Read Config table from database. Corresponding to 'SELECT * from cpapp_db_config'
        config_details = await SELECT.one.from(Config).where({ project_id: project_id });
        console.log(config_details);
        // Read Data table from database. Corresponding to 'SELECT * from cpapp_db_project'
        project_data = await SELECT.one.from(Data).where({ project_id: project_id });
        console.log(project_data);

        results_data = await INSERT.into(Result).entries({
            project_id: project_id,
            output_1: config_details.config_1 + project_data.input_1,
            output_2: config_details.config_2 + project_data.input_2,
            output_3: config_details.config_3 + project_data.input_3,
            output_4: config_details.config_4 + project_data.input_4
        });

        return "Project Id : " + project_id;
    });

    srv.on('UPDATE', 'Excels', async req => {
        console.log(req.data);
        // read from a stream
        let reader = new ExcelReader(req.data.content, {
            sheets: [{
                name: 'testdata',
                rows: {
                    headerRow: 1,
                    allowedHeaders: [{
                        name: 'project_id',
                        key: 'project_id'
                    }, {
                        name: 'Input_1',
                        key: 'Input_1'
                    }, {
                        name: 'Input_2',
                        key: 'Input_2'
                    }]
                }
            }]
        })
        console.log('starting parse');
        reader.eachRow((rowData, rowNum, sheetSchema) => {
                console.log(rowData);
            })
            .then(() => {
                console.log('done parsing');
            });
    })

    srv.on('READ', 'Excels', (req, next) => {
        if (!req.data.ID) {
            return next()
        }
        return {
            value: fs.createReadStream('swagger/test_xls.xlsx')
        }
    })

};