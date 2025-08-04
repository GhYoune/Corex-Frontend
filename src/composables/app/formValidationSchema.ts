import { useI18n } from "vue-i18n";
import z from "zod";

export const formValidationSchema = () => {
 const { t } = useI18n();
 return z.object({
  firstName: z.string().min(3, t("validation.required.name")),
  lastName: z.string().min(3, t("validation.required.lastname")),
  age: z.date({ error: t("validation.required.date") }),
  email: z.string().email(t("validation.invalid.email")),
  password: z.string().min(6, t("validation.required.password")).optional(),
  height_cm: z
   .number({ error: t("validation.invalid.number") })
   .min(100, t("validation.invalid.height"))
   .max(250, t("validation.invalid.height"))
   .optional(),

  weight_kg: z
   .number({ error: t("validation.invalid.number") })
   .min(40, t("validation.invalid.weight"))
   .max(200, t("validation.invalid.maxWeight"))
   .optional(),
  activity_level: z
   .enum(["sedentary", "light", "moderate", "active", "very_active"], {
    error: () => ({ message: t("validation.required.activity") }),
   })
   .optional(),

  goal_type: z
   .enum(["maintain", "lose", "gain"], {
    error: () => ({ message: t("validation.required.goal_type") }),
   })
   .optional(),

  is_premium: z.boolean().optional(),
  first_timer: z.boolean().optional(),
 });
};
