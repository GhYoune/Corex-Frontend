import { useI18n } from "vue-i18n";
import z from "zod";

export const formValidationSchema = () => {
 const { t } = useI18n();
 return z.object({
  firstName: z.string().min(3, t("validation.required.name")),
  lastName: z.string().min(3, t("validation.required.lastname")),
  age: z.date({ error: t("validation.required.date") }),
 });
};
