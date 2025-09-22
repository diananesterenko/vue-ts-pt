import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useApplicationForm(fn: (values: any) => void) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
        fio: "",
        phone: "",
        sum: "",
        status: "active"
        },
    })
const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
    "fio",
    yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters").trim()
);
const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    "phone",
    yup.number().required("Phone number is required").min(10, "Phone number must be at least 10 characters")
);
const {value:sum, errorMessage: suError, handleBlur: suBlur} = useField(
    "sum",
    yup.number().required("Sum is required").min(0, "Sum must be a positive number")
);
const { value: status } = useField("status");


const onSubmit = handleSubmit(fn)

return { onSubmit ,isSubmitting, status, fio, fError, fBlur, phone, pError, pBlur, sum, suError, suBlur }
}