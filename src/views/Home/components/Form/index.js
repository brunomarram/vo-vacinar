import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Form = ({ age, setAge, state, setState }) => {
  const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
  const ages = [ ...Array(91).keys() ].slice(10)

  return (
    <div className="row">
      <FormControl variant="filled" fullWidth>
        <InputLabel>Sua idade</InputLabel>
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          {ages.map((age) => (
            <MenuItem key={age} value={age}>
              {age}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" fullWidth>
        <InputLabel>Seu estado</InputLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Form;
