const express = require('express');
const router = express.Router();

var calendar = [
    [{
            title: 'All Day Event',
            start: '2018-04-31'
        },
        {
            title: 'All Day Event',
            start: '2018-04-01'
        },
        {
            title: 'Long Event',
            start: '2018-04-07',
            end: '2018-04-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-09T16:00:00',
            end: '2018-04-10T00:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2018-04-11',
            end: '2018-04-13'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T10:30:00',
            end: '2018-04-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2018-04-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2018-04-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2018-04-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2018-04-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-04-28'
        }
    ],
    [{
            title: 'All Day Event',
            start: '2018-04-31'
        },
        {
            title: 'All Day Event',
            start: '2018-04-01'
        },
        {
            title: 'Long Event',
            start: '2018-04-07',
            end: '2018-04-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-09T16:00:00',
            end: '2018-04-10T00:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2018-04-11',
            end: '2018-04-13'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T10:30:00',
            end: '2018-04-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2018-04-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2018-04-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2018-04-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2018-04-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-04-28'
        }
    ],
    [{
            title: 'All Day Event',
            start: '2018-04-31'
        },
        {
            title: 'All Day Event',
            start: '2018-04-01'
        },
        {
            title: 'Long Event',
            start: '2018-04-07',
            end: '2018-04-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-09T16:00:00',
            end: '2018-04-10T00:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-04-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2018-04-11',
            end: '2018-04-13'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T10:30:00',
            end: '2018-04-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2018-04-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2018-04-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2018-04-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2018-04-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2018-04-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-04-28'
        }
    ]
];


router.route('/')
    .get((req, res) => {
        res.json(calendar);
    });


module.exports = router;