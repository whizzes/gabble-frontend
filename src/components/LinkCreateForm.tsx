import TextField from './TextField';

export const LinkCreateForm: React.FC = () => {
  return (
    <form>
      <TextField
        label="URL"
        value="VACIO"
        name="url"
        placeholder="https://www.google.com"
        error="No hay error"
        onChange={console.log}
      />
    </form>
  );
};
