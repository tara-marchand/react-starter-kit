var fs = require('fs');
var jsf = require('json-schema-faker');

jsf.extend('faker', function() {
    var faker = require('faker/locale/en_US');
    return faker;
});

var doctorSchema = {
    type: 'object',
    properties: {
        photo: {
            type: 'string',
            faker: 'image.avatar'
        },

        name: {
            type: 'string',
            faker: 'name.findName'
        },

        speciality: {
            type: 'string',
            faker: 'name.jobArea'
        },

        location: {
            name: {
                type: 'string',
                faker: 'company.companyName'
            },

            address: {
                type: 'string',
                faker: 'address.streetAddress'
            },

            city: {
                type: 'string',
                faker: 'address.city'
            },

            state: {
                type: 'string',
                faker: 'address.stateAbbr'
            },

            zip: {
                type: 'string',
                faker: 'address.zipCode'
            },

            geoLat: {
                type: 'string',
                faker: 'address.latitude'
            },

            geoLong: {
                type: 'string',
                faker: 'address.longitude'
            }
        }
    },
    required: ['photo', 'name', 'speciality', 'location']
};

// generate bigDataSet as example
var doctors = [];

for(i = 20; i >= 0; i--){
  doctors.push(jsf(doctorSchema));
};

fs.writeFile(__dirname + '/doctors.json',  JSON.stringify(doctors), function() {
  console.log("Doctors data generated successfully!");
});
