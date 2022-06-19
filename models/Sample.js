let Model = require("../system/Model");
class Sample extends Model
{
    constructor()
    {
        super();
    }

    // name = async function(req)
    // {
    //     let sampleData = await this.query(
    //         "SELECT sample, email FROM sample WHERE id = $1",
    //         [req.session.id]);
    //     return user[0];
    // }
}

module.exports = new Sample();