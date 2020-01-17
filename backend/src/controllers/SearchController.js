const Dev = require('../models/Dev');
const StringToArray = require('../utils/StringToArray');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        const techsArray = StringToArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance:10000000,
                }
            },
        });

        return response.json({devs});
    },
}