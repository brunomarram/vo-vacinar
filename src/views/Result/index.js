import { Button } from "@material-ui/core";

import moment from "moment"

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom'

import Info from "./components/Info";

import "./style.sass"
import { useEffect } from "react";
import InfoAlert from "./components/InfoAlert";

const Result = () => {
  const history = useHistory();

  const location = useLocation();
  const { age, state, result, firstStep, secondStep, population } = location.state;

  useEffect(() => {
    moment.locale('pt-br');
  }, [])

  const formatDate = (date) => {
    const onlyDate = date.split(" ")[0],
      dateParts = onlyDate.split("/");

    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
  }

  const numberWithThousandsSeparator = (number) => {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  }

  return (
    <section className="result-container">
      <div className="box">
        <h2>
          Considerando que você possui <span>{age} anos</span> e mora no estado de{" "}
          <span>{state}</span> que tem <span>{numberWithThousandsSeparator(firstStep)}</span> vacinados com a primeira
          dose e <span>{numberWithThousandsSeparator(secondStep)}</span> com a segunda, e uma população de{" "}
          <span>{numberWithThousandsSeparator(population)}</span> hab. Sua vacinação está estimada em aproximadamente:
        </h2>
        <h1>{result ? moment(formatDate(result)).format("DD [de] MMMM [de] YYYY") : "Você já pode ser vacinado! Procure mais informações na sua cidade"}</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => history.push("/")}
        >
          Estimar novamente
        </Button>
        <InfoAlert/>
        <Info/>
      </div>
    </section>
  );
};

export default Result;
