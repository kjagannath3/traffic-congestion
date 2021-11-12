const InfoScreen = () => {
    return (
        <div>
            <div className="calendar-section">
                        <header className='subtitle-header'>Calendar</header>
                        <div className='subtitle-content'>
                            <div className="calendar" id="calendar">
                                <div className="calendar-btn month-btn" onclick="$('#months').toggle('fast')">
                                    <span id="curMonth"></span>
                                    <div id="months" className="months dropdown"></div>
                                </div>
                            
                                <div className="calendar-btn year-btn" onclick="$('#years').toggle('fast')">
                                    <span id="curYear"></span>
                                    <div id="years" className="years dropdown"></div>
                                </div>
                            
                                <div className="clear"></div>
                            
                                <div className="calendar-dates">
                                    <div className="days">
                                        <div className="day label">SUN</div>
                                        <div className="day label">MON</div>
                                        <div className="day label">TUE</div>
                                        <div className="day label">WED</div>
                                        <div className="day label">THU</div>
                                        <div className="day label">FRI</div>
                                        <div className="day label">SAT</div>
                                        <div className="clear"></div>
                                    </div>
                                    <div id="calendarDays" className="days">
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
            <div className='links'>
                <a href=''>Home</a>
                <a href=''>Tutorial</a>
                <a href=''>About</a>
            </div>
        </div>
    )
}

export default InfoScreen
