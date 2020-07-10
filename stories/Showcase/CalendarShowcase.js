import React from "react";
import { Calendar } from "../../src";

const setDate = (ms) => {
    let month, week, day;

    if (ms) {
        month = (moment(ms).year() - moment().year()) * 12
            + moment(ms).month() - moment().month();
        week = moment(ms).weeks() - moment(ms).startOf('month').weeks();
        day = moment(ms).weekday();
    }
    else {
        month = 0;
        week = moment().weeks() - moment().startOf('month').weeks();
        day = moment().weekday();
    }

    return { month, week, day };
}
const CalendarStory = () => (
    <div>
        <Calendar 
            onCancel={() => console.log("close")}
            onSubmit={(ms) => console.log("Test")}
            // primaryColor={"green"}
            // calendarColor={'yellow'}
            dayColor={'black'}
            style={{ width: 300, fontFamily: 'sofia' }}
            date={new Date().getTime()}
            showButtons
            showTop
        />
        
    </div>
);

export default () => <CalendarStory />;