import React, { Component } from "react";
import "../App.css";
import { khi_timing } from "../config/khi_timing";
import ArrowBack from '@material-ui/icons/ArrowBack';
import Icon from '@material-ui/core/Icon';
import Appbar from "../components/Appbar";
import Today from "../components/Today";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import moment from "moment";
import Timer from "react-awesome-countdowntimer";
import Footer from "../components/Footer";
import ButtonFullView from "../components/ButtonFullView"

class Karachi extends Component {
  constructor() {
    super();

    this.state = {
      today: "",
      time: "",
      yesterday: "",
      tomorrow: "",
      isYesterday: false,
      isToday: true,
      isTomorrow: false,
      YesterdayBTNcolor: "default",
      TodayBTNcolor: "primary",
      TomorrowBTNcolor: "default",
      sehrTimer: false,
      iftarTimer: false
    };
  }

  systemDate() {
    const yesterday = moment()
      .subtract(1, "days")
      .format("DD MMMM YYYY");
    const today = moment().format("DD MMMM YYYY");
    const time = moment().format("hh:MM A");
    const tomorrow = moment()
      .add(1, "days")
      .format("DD MMMM YYYY");
    this.setState({ today, yesterday, tomorrow, time });
  }

  componentDidMount() {
    this.systemDate();
  }

  render() {
    const {
      today,
      tomorrow,
      yesterday,
      isYesterday,
      isToday,
      isTomorrow,
      YesterdayBTNcolor,
      TodayBTNcolor,
      TomorrowBTNcolor
    } = this.state;

    return (
      <div>
        <header>
          <Appbar Title="Karachi Ramzan Timings 2020"/>
          <CardActions>
            <Button
              variant="contained"
              fullWidth="true"
              color={YesterdayBTNcolor}
              onClick={() => {
                this.setState({
                  isYesterday: true,
                  isToday: false,
                  isTomorrow: false,
                  YesterdayBTNcolor: "primary",
                  TodayBTNcolor: "default",
                  TomorrowBTNcolor: "default"
                });
              }}
            >
              Yesterday
            </Button>

            <Button
              variant="contained"
              fullWidth="true"
              color={TodayBTNcolor}
              onClick={() => {
                this.setState({
                  isToday: true,
                  isYesterday: false,
                  isTomorrow: false,
                  YesterdayBTNcolor: "default",
                  TodayBTNcolor: "primary",
                  TomorrowBTNcolor: "default"
                });
              }}
            >
              Today
            </Button>

            <Button
              variant="contained"
              fullWidth="true"
              color={TomorrowBTNcolor}
              onClick={() => {
                this.setState({
                  isTomorrow: true,
                  isToday: false,
                  isYesterday: false,
                  YesterdayBTNcolor: "default",
                  TodayBTNcolor: "default",
                  TomorrowBTNcolor: "primary"
                });
              }}
            >
              Tomorrow
            </Button>
          </CardActions>

          {!isYesterday &&
            !isTomorrow &&
            isToday &&
            khi_timing.map(item => {
              if (item.Date === today) {

                return (
                  <div>
                    <Today
                      RamazanDay={item.Ramadan}
                      TodayDate={today}
                      Sehar={item.SEHR}
                      Iftar={item.IFTAR}
                    />
                    <br />
                    <h2 align="center">Time left in Iftar</h2>
                    <Timer endDate={moment(today + " " + item.IFTAR)} />
                    <h2 align="center">Time left in Sehr</h2>
                    <Timer endDate={moment(today + " " + item.SEHR)} />
                  </div>
                );
              }
            })}

          {isYesterday &&
            !isTomorrow &&
            !isToday &&
            khi_timing.map(item => {
              if (item.Date === yesterday) {
                return (
                  <Today
                    RamazanDay={item.Ramadan}
                    TodayDate={item.Date}
                    Sehar={item.SEHR}
                    Iftar={item.IFTAR}
                  />
                );
              }
            })}

          {!isYesterday &&
            isTomorrow &&
            !isToday &&
            khi_timing.map(item => {
              if (item.Date === tomorrow) {
                return (
                  <Today
                    RamazanDay={item.Ramadan}
                    TodayDate={item.Date}
                    Sehar={item.SEHR}
                    Iftar={item.IFTAR}
                  />
                );
              }
            })}

        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ArrowBack />}

            size="large"
            style={{ margin: 10 }}
            onClick={() => window.history.back()}
          >
            Go Back
      </Button>

          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            size="large"
            style={{ margin: 10 }}
            onClick={() => window.location = "/KarachiRamazanTimings"}
          >
            View Full Calender
      </Button>
        </center>
        <Footer />
      </div>
    );
  }
}

export default Karachi;
