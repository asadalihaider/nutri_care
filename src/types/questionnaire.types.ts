import { 
  ActivityLevel,
  BodyTypeGoal,
  DietaryGoal,
  Diet,
  DietPreference,
  EnergyLevel,
  ExerciseFrequency,
  FitnessGoal,
  HealthMotivation,
  HealthOptimization,
  MealFrequency,
  NutrientPreference,
  SubstanceConsumption,
  WaterIntake
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
  energyLevels: EnergyLevel;
  waterIntake: WaterIntake;
  substanceConsumption: SubstanceConsumption[];
}
  
export interface DietPreferences {
  diets: Diet[];
  isFoodInTolerances: boolean;
  foodInTolerances: string[];
  isFoodDislikes: boolean;
  foodDislikes: string[];
  dietPreferenceReligious: DietPreference;
  dietaryGoal: DietaryGoal;
  mealFrequency: MealFrequency;
  nutrientPreference: NutrientPreference;
}

export interface PhysicalActivity {
  activityLevel: ActivityLevel;
  exerciseFrequency: ExerciseFrequency;
  fitnessGoal: FitnessGoal;
  bodyTypeGoal: BodyTypeGoal;
}

export interface HealthGoals {
  healthOptimization: HealthOptimization;
  healthMotivation: HealthMotivation;
}

export interface QuestionnaireInput {
  medicalBackground: MedicalBackground;
  lifestyleHabits: LifestyleHabits;
  dietPreferences: DietPreferences;
  physicalActivity: PhysicalActivity;
  healthGoals: HealthGoals;
}
