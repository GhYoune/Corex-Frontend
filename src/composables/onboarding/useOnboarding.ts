import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import TextFiledInput from "../../components/FormComponents/TextFiledInput.vue";
import type { User } from "../../model/User";

interface OnboardingScreens {
 stepsIndex: number;
 icon?: string;
 mainHeadLine: string;
 secondaryHeadLine?: string;
 description?: string;
}

export function useOnboarding() {
 const { t } = useI18n();
 const formInputs = ref<User>();
 const currentStepIndex = ref<number>(0);
 const screens: OnboardingScreens[] = [
  {
   stepsIndex: 0,
   icon: "mdi-lightning-bolt-circle",
   mainHeadLine: t("onboarding.screen.first-headline"),
   secondaryHeadLine: t("onboarding.screen.third-headline"),
   description: t("onboarding.screen.second-headline"),
  },
  {
   stepsIndex: 1,
   icon: "mdi-flag-checkered",
   mainHeadLine: t("onboarding.screen.goal-headline"),
   secondaryHeadLine: t("onboarding.screen.goal-secondary"),
   description: t("onboarding.screen.goal-disc"),
  },
  {
   stepsIndex: 2,
   icon: "mdi-finance",
   mainHeadLine: t("onboarding.screen.progress-screen"),
   secondaryHeadLine: t("onboarding.screen.progress-sec"),
   description: t("onboarding.screen.progress-disc"),
  },
  {
   stepsIndex: 3,
   icon: "mdi-bell",
   mainHeadLine: t("onboarding.screen.notif-headline"),
   secondaryHeadLine: t("onboarding.screen.notif-second"),
   description: t("onboarding.screen.notif-disc"),
  },
  {
   stepsIndex: 4,
   icon: "mdi-information",
   mainHeadLine: t("onboarding.screen.notice-headline"),
   secondaryHeadLine: t("onboarding.screen.notice-seconde"),
   description: t("onboarding.screen.notice-disc"),
  },
 ];

 const formInputScreens = [{ stepsIndex: 6, component: TextFiledInput }];

 const nextScreen = () => {
  if (currentStepIndex.value >= screens.length + formInputScreens.length - 1)
   return;
  else {
   return currentStepIndex.value++;
  }
 };
 const previousScreen = () => {
  if (currentStepIndex.value >= 1) return currentStepIndex.value--;
 };
 const progress = computed(() => {
  return ((currentStepIndex.value + 1) / screens.length) * 100;
 });

 return {
  screens,
  currentStepIndex,
  nextScreen,
  previousScreen,
  progress,
  formInputScreens,
  formInputs,
 };
}
