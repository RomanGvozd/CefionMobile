const moment = require('moment');

const dateNow = moment().locale('en').format('dddd')

export const buttonsDays = [
    {
        id: 1,
        titleEN: "Mo",
        titleRU: "Пн",
        dateFull: "Monday",
        date: moment().startOf('isoweek').date(),
        dateActive: dateNow,

    },
    {
        id: 2,
        titleEN: "Tu",
        titleRU: "Вт",
        dateFull: "Tuesday",
        date: moment().startOf('week').add('days', 1).date(),
        dateActive: dateNow,

    },
    {
        id: 3,
        titleEN: "We",
        titleRU: "Ср",
        dateFull: "Wednesday",
        date: moment().startOf('week').add('days', 2).date(),
        dateActive: dateNow,

    },
    {
        id: 4,
        titleEN: "Th",
        titleRU: "Чт",
        dateFull: "Thursday",
        date: moment().startOf('week').add('days', 3).date(),
        dateActive: dateNow,

    },
    {
        id: 5,
        titleEN: "Fr",
        titleRU: "Пн",
        dateFull: "Friday",
        date: moment().startOf('week').add('days', 4).date(),
        dateActive: dateNow,

    },
    {
        id: 6,
        titleEN: "Sa",
        titleRU: "Сб",
        dateFull: "Saturday",
        date: moment().startOf('week').add('days', 5).date(),
        dateActive: dateNow,

    },
    {
        id: 7,
        titleEN: "Su",
        titleRU: "Вс",
        dateFull: "Sunday",
        date: moment().startOf('week').add('days', 6).date(),
        dateActive: dateNow,

    },

]