const cds = require("@sap/cds");
const { ProjectData } = cds.entities("cpapp.project");
const { ResultsData } = cds.entities("cpapp.results");
const { Config } = cds.entities("cpapp.industry");

module.exports = srv => {

    srv.on("runmodel", async(req, res) => {
        let project_id = req.data.msg
        console.log(project_id);

        config_details = await SELECT.one.from(Config).where({ project_id: project_id });
        console.log(config_details);
        project_data = await SELECT.one.from(ProjectData).where({ project_id: project_id });
        console.log(project_data);

        results_data = await INSERT.into(ResultsData).entries({
            project_id: project_id,
            output_1: config_details.config_1 + project_data.input_1,
            output_2: config_details.config_2 + project_data.input_2,
            output_3: config_details.config_3 + project_data.input_3,
            output_4: config_details.config_4 + project_data.input_4
        });

        return "Project Id : " + project_id;
    });

};