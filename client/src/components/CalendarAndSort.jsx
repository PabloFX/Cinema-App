import React from 'react';

const CalendarAndSort = () => {
    return(
        <div className="CalendarAndSort">
            <div className="sort"><i className="material-icons">sort</i><p className="pointer">Popular</p></div>
            <div className="calendar"><i className="material-icons">perm_contact_calendar</i><p className="pointer">Today</p></div>
        </div>
    )
}

export default CalendarAndSort