const express = require('express');
const router = express.Router();

var calendar = {
    // Years
    '2018' : {
        // Months
        '1' : {
            // Date
            '1' : {
                'start' : '1540',
                'end' : '1600'
            },
            '5' : {
                'start' : '1200',
                'end' : '1400'
            }
        },
        '2' : {
            '31': {
                'start' : '0030',
                'end' : '0500'
            }
        }
    }
};

module.exports = calendar;