import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #333;
    margin-bottom: 1rem;
  }
  button {
    height: 45px;
    font-size: 20px;
    letter-spacing: -1px;
    margin-top: 20px;
    background: #ccc;
  }
  button:hover {
    background: #333;
  }
`;
const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      //   margin: theme.spacing(1),
      width: "100%",
      marginBottom: "10px",
    },
  },
  input: {
    color: "#000",
    // borderBottom: "1px solid red",
  },
}));

const AuthForm = () => {
  const classes = useStyles();
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          className={classes.input}
          label="이메일"
          type="email"
        />
        <TextField
          id="standard-basic"
          className={classes.input}
          label="비밀번호"
          type="password"
        />
        <Button variant="contained" color="primary">
          로그인
        </Button>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
