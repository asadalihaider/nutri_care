import { 
  ActivityLevelCode,
  EnergyLevelCode,
  ExerciseFrequencyCode,
  FitnessGoalCode,
  HealthMotivationCode,
  HealthOptimizationCode,
  SleepQualityCode,
  StressLevelCode,
  WaterIntakeCode
} from './enums';

export interface MedicalBackground {
  takingMedications: boolean;
  medicationsList?: string[];
  takingSupplements: boolean;
  supplementsList?: string[];
  allergies: string[];
  pastConditions: string[];
  specificConcerns?: string;
  medicalConditions: string[];
  isAnyPastCondition: boolean;
  isAnyHealthConcern: boolean;
}
  
export interface LifestyleHabits {
  energyLevels: EnergyLevelCode;
  waterIntake: WaterIntakeCode;
  sleepQualityCode?: SleepQualityCode;
  stressLevelCode?: StressLevelCode;
  consumes: string[];
}
  
export interface DietPreferences {
  diets: string[];
  isFoodInTolerances: boolean;
  foodInTolerances: string[];
  isFoodDislikes: boolean;
  foodDislikes: string[];
  dietPreferenceReligiousCode: string;
  dietaryGoalCode: string;
  mealFrequencyCode: string;
  nutrientPreferenceCode: string;
}

export interface PhysicalActivity {
  activityLevelCode: ActivityLevelCode;
  exerciseFrequencyCode: ExerciseFrequencyCode;
  fitnessGoalCode: FitnessGoalCode;
  bodyTypeGoalCode: string;
}

export interface HealthGoals {
  healthOptimizationCode: HealthOptimizationCode;
  healthMotivationCode: HealthMotivationCode;
}

export interface QuestionnaireInput {
  medicalBackground: MedicalBackground;
  lifestyleHabits: LifestyleHabits;
  dietPreferences: DietPreferences;
  physicalActivity: PhysicalActivity;
  healthGoals: HealthGoals;
}
