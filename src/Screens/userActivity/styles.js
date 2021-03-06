export const styles = (theme) => ({
  Schedule_container: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0%",
    },
  },

  Schedule_SummaryPaper: {
    width: "50%",
    borderRadius: "10px",

    boxShadow: "inset 0px -21px 8px -10px #CCC,inset 0px 11px 8px -10px #CCC",
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  Schedule_EventIcon: {
    marginRight: theme.spacing(2),
    color: "#f50057",
  },
  Schedule_month: {
    fontSize: "14px",
    color: "#242021",
    opacity: "1",
  },
  Schedule_monthBelow: {
    fontSize: "14px",
    color: "#242021",
    opacity: "1",
    paddingBottom: theme.spacing(2),
  },
  Schedule_heading: {
    color: "#242021",
    opacity: "1",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: "18px",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  Scheduler_Paper: {
    borderRadius: "10px",
    marginBottom: theme.spacing(5),

    marginRight: theme.spacing(5),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "85%",
    },
  },
  Schedule_Appointments: {
    backgroundColor: "#5d001e",
  },
});
