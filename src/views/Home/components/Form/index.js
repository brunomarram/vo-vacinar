import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const Form = ({ age, setAge, state, setState, errors }) => {
  const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

  return (
    <div className="row">
      <TextField
        variant="filled"
        label="Sua Idade (anos)"
        type="number"
        fullWidth
        value={age}
        onChange={(e) => setAge(e.target.value)}
        inputProps={{
          step: 1,
          min: 10,
          max: 90
        }}
        error={Boolean(errors.age)}
        helperText={errors.age}
        required
      />
      <FormControl variant="filled" fullWidth required error={Boolean(errors.state)}>
        <InputLabel>Seu estado</InputLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        {errors.state ? <FormHelperText>{errors.state}</FormHelperText> : null}
      </FormControl>
    </div>
  );
};

export default Form;
