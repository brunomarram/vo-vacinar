import logo from "../../assets/logo.png";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Button, Snackbar } from "@material-ui/core";

import "./style.sass";
import Form from "./components/Form";
import { useHistory } from "react-router";
import { useState } from "react";
import request from "../../api/request";

const Home = () => {
  const history = useHistory();

  const [age, setAge] = useState("");
  const [state, setState] = useState("");

  const [errors, setErrors] = useState({
    age: "",
    state: "",
    backend: ""
  })

  const validate = (condition, field, message) => {
    setErrors(errors => ({ ...errors, [field]: condition ? message : "" }))
    return !condition
  }

  const isValidForm = () => {
    let status = true

    status = validate(!state, "state", "Estado é obrigatório")
    if(!status) return false;
    status = validate(!age || age < 10 || age > 90, "age", "Idade inválida")
    if(!status) return false;

    return status
  }

  const handleClose = () => {
    setErrors(errors => ({ ...errors, backend: "" }));
  };

  const submit = async () => {
    if(isValidForm()) {
      try {
        const result = await request("POST", "predicao/", {
          key: "6#)8)fvi*^!**la-0^s(!be4z)sbc#)tw_lr56b_c&l#!p5g0(UFV",
          idade: age,
          estado: state,
        });

        if(result.data?.erro) {
          setErrors(errors => ({ ...errors, backend: result.data.erro }))
          return;
        }
  
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
    }

    return true;
  };

  return (
    <form className="home-container">
      <div className="box">
        <img src={logo} alt="logo" />
        <h1>Descubra aproximadamente a partir de que dia você será vacinado</h1>
        <Form age={age} state={state} setState={setState} setAge={setAge} errors={errors} />
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={submit}
        >
          Qui dia vô vacinar?
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(errors.backend)}
        onClose={handleClose}
        message={errors.backend}
      />
    </form>
  );
};

export default Home;
