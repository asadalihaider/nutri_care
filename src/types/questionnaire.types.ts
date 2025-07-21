import { 
  ActivityLevelCode,
  BodyTypeGoalCode,
  DietaryGoalCode,
  DietCode,
  DietPreferenceCode,
  EnergyLevelCode,
  ExerciseFrequencyCode,
  FitnessGoalCode,
  HealthMotivationCode,
  HealthOptimizationCode,
  MealFrequencyCode,
  NutrientPreferenceCode,
  SubstanceConsumptionCode,
  WaterIntakeCode
} from './enums';

  
interface Medication {
  name: string;
  dosage: number;
  frequency: number;
}
interface Supplement {
  name: string;
  dosage: number;
  frequency: number;
}

export interface MedicalBackground {
  takingMedications: boolean;
  medicationsList?: Medication[];
  takingSupplements: boolean;
  supplementsList?: Supplement[];
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
  substanceConsumptionCode: SubstanceConsumptionCode[];
}
  
export interface DietPreferences {
  diets: DietCode[];
  isFoodInTolerances: boolean;
  foodInTolerances: string[];
  isFoodDislikes: boolean;
  foodDislikes: string[];
  dietPreferenceReligiousCode: DietPreferenceCode;
  dietaryGoalCode: DietaryGoalCode;
  mealFrequencyCode: MealFrequencyCode;
  nutrientPreferenceCode: NutrientPreferenceCode;
}

export interface PhysicalActivity {
  activityLevelCode: ActivityLevelCode;
  exerciseFrequencyCode: ExerciseFrequencyCode;
  fitnessGoalCode: FitnessGoalCode;
  bodyTypeGoalCode: BodyTypeGoalCode;
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
