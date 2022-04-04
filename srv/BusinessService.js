const cds = require("@sap/cds");
const { ProjectData } = cds.entities("cpapp.project");
const { ResultsData } = cds.entities("cpapp.results");
const { Config } = cds.entities("cpapp.industry");

module.exports = srv => {
    // To test the function send request to --  http://localhost:4004/business-logic/businesslogic()  -- via the browser.
    srv.on("businesslogic", async () => {

        // Read Config table from database. Corresponding to 'SELECT * from cpapp_project_Config'
        config_data = await SELECT.from(Config);
        
        // Read ProjectData table from database. Corresponding to 'SELECT * from cpapp_project_ProjectData'
        project_data = await SELECT.from(ProjectData);

        // Multiply Config table's config_1 and config_2 columns then divide by ProjectData table's input_1 column for the first record 
        // Then store the results at ResultsData table's output_1 column
        results_data = await INSERT.into(ResultsData).entries({
            project_id: config_data[0].project_id,
            output_1: (config_data[0].config_1 * config_data[0].config_2) / project_data[0].input_1

        });
        // If operation is successfull we should see the following message.
        return "Data inserted successfully!";
    });

};
