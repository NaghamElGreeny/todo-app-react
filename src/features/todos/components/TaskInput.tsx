import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../styles/task-input.scss";

interface TaskInputProps {
  onAdd: (title: string) => void;
}

const taskValidationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(3, "Task must be at least 3 characters")
});

export default function TaskInput({ onAdd }: TaskInputProps) {
  return (
    <Formik
      initialValues={{ title: "" }}
      validationSchema={taskValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.title.trim());
        resetForm();
      }}
    >
      {({ isValid, dirty, values }) => {
        const isDisabled = !dirty || !isValid || !values.title.trim();

        return (
          <Form className="flex w-full my-4 items-center">
            <div className="flex flex-col flex-1 relative">
              <Field
                name="title"
                placeholder="Add new task..."
                className="task-input flex-1"
              />
              <button
                type="submit"
                disabled={isDisabled}
                className={`task-input-btn absolute right-2 top-2 ${
                  isDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Add
              </button>

              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-sm mt-1 ps-6"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
