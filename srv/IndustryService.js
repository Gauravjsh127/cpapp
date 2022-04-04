module.exports = srv => {
    const {Config} = srv.entities
    // Sends a select query to corresponding table in the database. Then the resuls will be available at -->  http://localhost:4004/industry/Config 
    srv.after('READ', 'Config',  async (res, req) => {
        var result = [];
        result = await cds.transaction(req).run(SELECT .from('cpapp.industry.Config'));
       // console.log(result);
        return result;
    })

}

