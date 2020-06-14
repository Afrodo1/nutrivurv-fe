import React from "react";
import { useForm } from "react-hook-form";

const Metric = ({ bmi, setBmi, setUser, user, setStep }) => {
  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("Complete");
  };

  let meters = Number(bmi.cm) / 100;
  let height = meters * meters;
  bmi.total = Math.ceil(Number(bmi.kg) / height);
  const formGroup = "col-sm-12 col-md-4 form-group";
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="centimeters">Centimeters</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="centimeters"
              name="cm"
              placeholder="cm"
              defaultValue={bmi.cm}
              onChange={handleChanges}
              ref={register({
                required: {
                  value: true,
                  message: "Please add height in Centimeters",
                },
                maxLength: {
                  value: 3,
                  message: "Max character length is 3",
                },
              })}
            />
            {errors.cm && (
              <small className="text-danger">{errors.cm.message}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="kilograms">kilograms</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="kilograms"
              name="kg"
              placeholder="kg"
              defaultValue={bmi.kg}
              onChange={handleChanges}
              ref={register({
                required: {
                  value: true,
                  message: "Please add weight in Kilograms",
                },
                maxLength: {
                  value: 3,
                  message: "Max character limit is 3",
                },
              })}
            />
            {errors.kg && (
              <small className="text-danger">{errors.kg.message}</small>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn-primary rounded p-2 w-100 border border-primary mt-2 mb-4"
          type="submit"
        >
          Submit
        </button>
        <h5>
          Your BMI:{" "}
          <span className="text-info">
            {isNaN(bmi.total) ? "0" : bmi.total}
          </span>
        </h5>
      </form>
    </>
  );
};

export default Metric;
