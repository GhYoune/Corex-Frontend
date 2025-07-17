import { useStorage } from "@vueuse/core";
import type { User } from "../../model/User";

export function useLocalAuth() {
 const localUser = useStorage<User | null>("localUser", null);

 return {
  localUser,
 };
}
