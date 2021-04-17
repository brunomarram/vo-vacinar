import logo from "../../assets/logo.png";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Button } from "@material-ui/core";

import "./style.sass";
import Form from "./components/Form";
import { useHistory } from "react-router";
import { useState } from "react";
import request from "../../api/request";

const Home = () => {
  const history = useHistory();

  const [age, setAge] = useState("");
  const [state, setState] = useState("");

  const submit = async () => {
    try {
      const result = await request("POST", "predicao/", {
        key: "6#)8)fvi*^!**la-0^s(!be4z)sbc#)tw_lr56b_c&l#!p5g0(UFV",
        idade: age,
        estado: state,
      });

      history.push("/resultado", {
        age,
        state,
        result: result.data.previsao,
        firstStep: result.data.qtd_vacinados_1_dose,
        secondStep: result.data.qtd_vacinados_2_dose,
        population: result.data.tamanho_populacao,
      });
    } catch (ex) {
      console.log(ex);
    }

    return true;
  };

  return (
    <form className="home-container">
      <div className="box">
        <img src={logo} alt="logo" />
        <h1>Descubra que dia aproximadamente você será vacinado</h1>
        <Form age={age} state={state} setState={setState} setAge={setAge} />
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={submit}
        >
          Qui dia vô vacinar?
        </Button>
      </div>
    </form>
  );
};

export default Home;
