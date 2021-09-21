import { makeStyles } from "@mui/material";

const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minWidth: "340px",
    height: "100vh",
    backgroundColor: "#F4F1F9",
  },
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50vw",
    margin: "10vw 2vw",
    minWidth: "300px",
  },
  iconStyle: {
    color: "red",
    fontSize: "10rem",
  },
  header: {
    fontSize: "2.5rem",
    fontWeight: 500,
  },
  subHeader: {
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "center",
  },
  btnStyle: {
    margin: "6%",
    backgroundColor: "red",
    color: "#fefefe",
    textTransform: "none",
  },
  linkStyle: {
    textDecoration: "none",
    backgroundColor: "red",
    color: "#fefefe",
  },
}));
export default styles;
