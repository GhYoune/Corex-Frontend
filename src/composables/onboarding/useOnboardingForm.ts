import z from "zod";

export const useOnboardingFormValidation = () => {

 z.object({
  name:z.string().min(3,'Name is Required')
 })
};
