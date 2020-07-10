import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import { Icon } from "../Icon";
import tokens from "../Util/Token";

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const CalendarContainerDiv = styled.div((props)=> ({
  backgroundColor: props.calendarColor ? props.calendarColor : 'white',
  boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: "5%",
  padding: 5,
  ...props.style}));


const CalendarTopContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${props => {
    props.primaryColor ? props.primaryColor : tokens.color.brandBlue;
  }};
`;

const CalendarArrowContainerDiv = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: ${tokens.fontFamily.default};
`;

const CalendarMonthConatinerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarDayContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: ${tokens.fontFamily.default};
`;

const CalendarDayDiv = styled.div`
  height: 30px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CalendarDayInnerDiv = styled.div`
  color: ${props => {
    props.primaryColor ? props.primaryColor : tokens.color.brandBlue;
  }};
`;

const CalendarContentContainerDiv = styled.div`
  background-color: ${props=>props.backgroundColor};
  padding: 5px;
`;

const CalendarDateContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CalendarWeekContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CalendarDateInnerContainerDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalenderDateInnerStyleDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${tokens.fontFamily.default};
`;

const CalendarButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: ${tokens.fontFamily.default};
`;

const CalendarCancelButtonDiv = styled.div`
  color: ${props => {
    props.primaryColor ? props.primaryColor : tokens.color.brandBlue;
  }};
  padding: 10px;
`;

const CalendarSubmitButtonDiv = styled.div`
  color: ${props => {
    props.primaryColor ? props.primaryColor : tokens.color.brandBlue;
  }};
  padding: 10px;
`;

class CalendarWithStyle extends Component {
  constructor(props) {
    super(props);

    const date = this.setDate(props.date);

    this.state = {
      month: date.month,
      selected: {
        month: date.month,
        week: date.week,
        day: date.day
      }
    };
  }

  onClickLeft = () => {
    const { month } = this.state;
    this.setState({ month: month - 1 });
  };

  onClickRight = () => {
    const { month } = this.state;
    this.setState({ month: month + 1 });
  };

  getDate = (month, week, day) => {
    const date = moment()
      .add(month, "month")
      .startOf("month")
      .clone()
      .add(week, "week")
      .weekday(day)
      .format();

    return new Date(date).valueOf();
  };

  setDate = ms => {
    let month, week, day;

    if (ms) {
      month =
        (moment(ms).year() - moment().year()) * 12 +
        moment(ms).month() -
        moment().month();
      week =
        moment(ms).weeks() -
        moment(ms)
          .startOf("month")
          .weeks();
      day = moment(ms).weekday();
    } else {
      month = 0;
      week =
        moment().weeks() -
        moment()
          .startOf("month")
          .weeks();
      day = moment().weekday();
    }

    return { month, week, day };
  };

  onClickDate = (month, week, day) => {
    const ms = this.getDate(month, week, day);
    const date = this.setDate(ms);

    this.setState({
      selected: {
        month: date.month,
        week: date.week,
        day: date.day
      },
      month: date.month
    });
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  onSubmit = () => {
    const { selected } = this.state;
    const ms = this.getDate(selected.month, selected.week, selected.day);

    if (this.props.onSubmit) {
      this.props.onSubmit(ms);
    }
  };

  renderTop = () => {
    const { selected } = this.state;
    const { month, week, day } = selected;

    const calcMoment = moment()
      .add(month, "month")
      .startOf("month")
      .clone()
      .add(week, "week")
      .weekday(day);

    return (
      //Still working on this. 2nd Mar 2020
      <div style={{ height: 25, display: 'flex', justifyContent: 'space-between'}}>

        <div style={{ margin: 10, fontFamily: tokens.fontFamily.default, fontSize: 13}}>
          Meeting Calendar
        </div>
        <div>
          <Icon.Right />
        </div>

      </div>

      // <CalendarTopContainerDiv>
      //   <div style={{ color: "white" }}>Due date</div>
      //   <div style={{ color: "white" }}>{calcMoment.format("YYYY")}</div>
      //   <div style={{ color: "white", fontSize: 24 }}>
      //     {calcMoment.format("ddd, MMM D")}
      //   </div>
      // </CalendarTopContainerDiv>
    );
  };

  renderArrows = () => {
    const { month } = this.state;

    return (
      <CalendarArrowContainerDiv>
        <Center className={"button"} onClick={this.onClickLeft}>
          <Icon.Left color={'gray'} />
        </Center>

        <CalendarMonthConatinerDiv>
          <div>
            {moment()
              .add(month, "month")
              .format("MMMM YYYY")}
          </div>
        </CalendarMonthConatinerDiv>

        <Center className={"button"} onClick={this.onClickRight}>
          <Icon.Right color={'gray'}/>
        </Center>
      </CalendarArrowContainerDiv>
    );
  };

  renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <CalendarDayContainerDiv>
        {days.map(day => {
          return (
            <CalendarDayDiv key={day}>
              <CalendarDayInnerDiv>{day}</CalendarDayInnerDiv>
            </CalendarDayDiv>
          );
        })}
      </CalendarDayContainerDiv>
    );
  };

  renderDates = () => {
    const { month, selected } = this.state;

    const startDate = moment()
      .add(month, "month")
      .startOf("month");
    const endDate = moment()
      .add(month, "month")
      .endOf("month");
    const firstWeekday = startDate.weekday();
    const lastWeekday = endDate.weekday();
    const weekOfMonth =
      moment().weeks() -
      moment()
        .add(month, "month")
        .startOf("month")
        .weeks();
    const dayOfWeek = moment().weekday();

    const days = [0, 1, 2, 3, 4, 5, 6];
    const weeks = [];
    const numOfWeeks = Math.ceil((startDate.day() + endDate.date()) / 7);
    for (let count = 0; count < numOfWeeks; count++) {
      weeks.push(count);
    }

    return (
      <CalendarDateContainerDiv>
        {weeks.map(week => {
          return (
            <CalendarWeekContainerDiv key={week}>
              {days.map(day => {
                let isToday = false;
                let isSelected = false;
                let outOfBound = 0;

                if (month === 0 && week === weekOfMonth && day === dayOfWeek) {
                  isToday = true;
                }
                if (
                  month === selected.month &&
                  week === selected.week &&
                  day === selected.day
                ) {
                  isSelected = true;
                }

                if (week === 0 && day < firstWeekday) {
                  outOfBound = -1;
                } else if (week === numOfWeeks - 1 && lastWeekday < day) {
                  outOfBound = 1;
                }

                const is = isSelected
                  ? {
                      backgroundColor: this.props.primaryColor
                        ? this.props.primaryColor
                        : tokens.color.brandBlue,
                      color: 'white'
                    }
                  : {};
                const it = isToday
                  ? {
                      color: this.props.primaryColor
                        ? this.props.primaryColor
                        : tokens.color.brandBlue
                    }
                  : {};
                const itis = isToday && isSelected ? { color: "white" } : {};
                const ofb = outOfBound !== 0 ? { color: "grey" } : {};

                return (
                  <CalendarDateInnerContainerDiv
                    key={day}
                    onClick={() =>
                      this.onClickDate(month, week, day, outOfBound)
                    }
                  >
                    <CalenderDateInnerStyleDiv style={{ ...is }}>
                      <div
                        style={{
                          color: this.props.dayColor && !isToday ? this.props.dayColor : "black",
                          ...it,
                          ...ofb,
                          ...is,
                          ...itis,
                        }}
                      >
                        {startDate
                          .clone()
                          .add(week, "week")
                          .weekday(day)
                          .format("D")}
                      </div>
                    </CalenderDateInnerStyleDiv>
                  </CalendarDateInnerContainerDiv>
                );
              })}
            </CalendarWeekContainerDiv>
          );
        })}
      </CalendarDateContainerDiv>
    );
  };

  renderButtons = () => {
    return (
      <CalendarButtonContainerDiv>
        <CalendarCancelButtonDiv className={"button"} onClick={this.onCancel}>
          CANCEL
        </CalendarCancelButtonDiv>
        
        <CalendarSubmitButtonDiv className={"button"} onClick={this.onSubmit}>
          Ok
        </CalendarSubmitButtonDiv>
      </CalendarButtonContainerDiv>
    );
  };

  render() {
    return (
      <CalendarContainerDiv calendarColor={this.props.calendarColor} style={this.props.style}>
        {this.props.showTop ? this.renderTop() : <div></div>}
        <CalendarContentContainerDiv>
          {this.renderArrows()}
          {this.renderDays()}
          {this.renderDates()}
          {this.props.showButtons? this.renderButtons() : <div></div>}
        </CalendarContentContainerDiv>
      </CalendarContainerDiv>
    );
  }
}

export default CalendarWithStyle;
