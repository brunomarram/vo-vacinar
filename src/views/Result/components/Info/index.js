const Info = () => {
  return (
    <div className="row">
      <div className="column">
        <h3>Como é feito essa estimativa?</h3>
        <p>
          Foi feito um estudo e desenvolvido um modelo baseado no conceito de
          regressão linear, pegando os dados de vacinação atualizados
          diaramente, em conjunto com a população de cada estado. A partir
          disso, é traçado uma função que irá representar uma estimativa baseada
          nos 7 últimos dias da vacinação para o seu estado.
        </p>
      </div>
      <div className="column">
        <h3>Fontes de dados:</h3>
        <a href="https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?=&t=resultados" target="_blank" rel="noreferrer">
          https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?=&t=resultados
        </a>
        <br/>
        <br/>
        <a href="https://github.com/wcota/covid19br/blob/master/cases-brazil-states.csv" target="_blank" rel="noreferrer">
          https://github.com/wcota/covid19br/blob/master/cases-brazil-states.csv
        </a>
      </div>
    </div>
  );
};

export default Info;
