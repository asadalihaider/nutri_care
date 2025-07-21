import { z } from 'zod';
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
} from '../types/enums';

export const profileSchema = z.object({
  age: z.number().min(0, 'Age must be a positive number'),
  gender: z.string().min(2).max(10),
  height: z.number().min(0),
  weight: z.number().min(0),
  targetWeight: z.number().min(0),
  image: z.string().optional(),
});

export const questionnaireSchema = z.object({
  medicalBackground: z.object({
    takingMedications: z.boolean(),
    medicationsList: z.array(z.object({ name: z.string(), dosage: z.number().min(0), frequency: z.number().min(0) })),
    takingSupplements: z.boolean(),
    supplementsList: z.array(z.object({ name: z.string(), dosage: z.number().min(0), frequency: z.number().min(0) })),
    allergies: z.array(z.string()),
    pastConditions: z.array(z.string()),
    specificConcerns: z.string(),
    medicalConditions: z.array(z.string()),
    isAnyPastCondition: z.boolean(),
    isAnyHealthConcern: z.boolean(),
  }),
  lifestyleHabits: z.object({
    energyLevels: z.nativeEnum(EnergyLevelCode),
    waterIntake: z.nativeEnum(WaterIntakeCode),
    substanceConsumptionCode: z.array(z.nativeEnum(SubstanceConsumptionCode)),
  }),
  dietPreferences: z.object({
    diets: z.array(z.nativeEnum(DietCode)),
    isFoodInTolerances: z.boolean(),
    foodInTolerances: z.array(z.string()),
    isFoodDislikes: z.boolean(),
    foodDislikes: z.array(z.string()),
    dietPreferenceReligiousCode: z.nativeEnum(DietPreferenceCode),
    dietaryGoalCode: z.nativeEnum(DietaryGoalCode),
    mealFrequencyCode: z.nativeEnum(MealFrequencyCode),
    nutrientPreferenceCode: z.nativeEnum(NutrientPreferenceCode),
  }),
  physicalActivity: z.object({
    activityLevelCode: z.nativeEnum(ActivityLevelCode),
    exerciseFrequencyCode: z.nativeEnum(ExerciseFrequencyCode),
    fitnessGoalCode: z.nativeEnum(FitnessGoalCode),
    bodyTypeGoalCode: z.nativeEnum(BodyTypeGoalCode),
  }),
  healthGoals: z.object({
    healthOptimizationCode: z.nativeEnum(HealthOptimizationCode),
    healthMotivationCode: z.nativeEnum(HealthMotivationCode),
  }),
});

