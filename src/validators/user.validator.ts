import { z } from 'zod';
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
  WaterIntake,
  Gender
} from '../types/enums';

export const profileSchema = z.object({
  age: z.number().min(0, 'Age must be a positive number').optional(),
  gender: z.nativeEnum(Gender).optional(),
  height: z.number().min(0).optional(),
  weight: z.number().min(0).optional(),
  targetWeight: z.number().min(0).optional(),
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
    energyLevels: z.nativeEnum(EnergyLevel),
    waterIntake: z.nativeEnum(WaterIntake),
    substanceConsumption: z.array(z.nativeEnum(SubstanceConsumption)),
  }),
  dietPreferences: z.object({
    diets: z.array(z.nativeEnum(Diet)),
    isFoodInTolerances: z.boolean(),
    foodInTolerances: z.array(z.string()),
    isFoodDislikes: z.boolean(),
    foodDislikes: z.array(z.string()),
    dietPreferenceReligious: z.nativeEnum(DietPreference),
    dietaryGoal: z.nativeEnum(DietaryGoal),
    mealFrequency: z.nativeEnum(MealFrequency),
    nutrientPreference: z.nativeEnum(NutrientPreference),
  }),
  physicalActivity: z.object({
    activityLevel: z.nativeEnum(ActivityLevel),
    exerciseFrequency: z.nativeEnum(ExerciseFrequency),
    fitnessGoal: z.nativeEnum(FitnessGoal),
    bodyTypeGoal: z.nativeEnum(BodyTypeGoal),
  }),
  healthGoals: z.object({
    healthOptimization: z.nativeEnum(HealthOptimization),
    healthMotivation: z.nativeEnum(HealthMotivation),
  }),
});

