import React from "react";
import { useForm } from "react-hook-form";
import NextBttn from "../Buttons/NextBttn";
import BackBttn from "../Buttons/BackBttn";
const Standard = ({ setBmi, bmi, setUser, user, nextStep, prevStep }) => {
  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { register, handleSubmit, errors } = useForm({});

  let height = Number(bmi.ft) * 12 + Number(bmi.inch);
  bmi.total = Math.ceil(
    (((703 * Number(bmi.weight)) / height) * height) / (height * height)
  );

  const formGroup = "col-sm-12 col-md-4 form-group";

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="feet">Feet</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="feet"
              name="ft"
              placeholder="ft"
              defaultValue={user.ft}
              onChange={handleChanges}
              ref={register({
                required: {
                  value: true,
                  message: "Please add height in feet",
                },
                maxLength: {
                  value: 1,
                  message: "Max length is 1",
                },
                max: {
                  value: 8,
                  message: "Max Value is 8",
                },
              })}
            />
            {errors.ft && (
              <small className="text-danger">{errors.ft.message}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="inches">Inches</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="inches"
              name="inch"
              placeholder="in"
              defaultValue={user.inch}
              onChange={handleChanges}
              ref={register({
                required: {
                  value: true,
                  message: "Add inches",
                },
                maxLength: {
                  value: 2,
                  message: "Max length is 2",
                },
                max: {
                  value: 11,
                  message: "Max value is 11",
                },
              })}
            />
            {errors.inch && (
              <small className="text-danger">{errors.inch.message}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="pounds">Pounds</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="pounds"
              name="weight"
              placeholder="lbs"
              defaultValue={user.weight}
              onChange={handleChanges}
              ref={register({ required: true, maxLength: 3, max: 999 })}
            />
            {errors.weight && (
              <small className="text-danger">{"Please add weight"}</small>
            )}
          </div>
        </div>
        <NextBttn handleSubmit={handleSubmit} nextStep={nextStep} />
        <BackBttn prevStep={prevStep} />
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

export default Standard;
