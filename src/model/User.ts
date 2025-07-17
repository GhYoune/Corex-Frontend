export interface User {
 name: string;
 email: string;
 password?: string;
 birth_date?: string;
 gender?: "male" | "female";
 height_cm?: number;
 weight_kg?: number;
 goal_weight_kg?: number;
 activity_level?: "sedentary" | "light" | "moderate" | "active" | "very_active";
 goal_type?: "maintain" | "lose" | "gain";
 calorie_goal?: number;
 protein_goal?: number;
 carb_goal?: number;
 fat_goal?: number;
 is_premium?: boolean;
 first_timer?: boolean;
}
