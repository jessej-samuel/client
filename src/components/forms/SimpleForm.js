import { Field, reduxForm } from "redux-form";

const SimpleForm = (props) => {
  const { handleSubmit } = props;

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
	return null;
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input
          {...input}
          type="text"
          placeholder={label}
          autoComplete={false}
        />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field name="description" component={renderInput} label="Description" />
      <button className="ui button primary" type="submit">
        Submit
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  return errors;
};

export default reduxForm({
  form: "newStream",
  validate,
})(SimpleForm);
