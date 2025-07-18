import { z } from 'zod';
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
} from '../types/enums';

export const uploadImageSchema = z.object({
  file: z
    .custom<Express.Multer.File>()
    .refine((file) => !!file, {
      message: 'Image file is required',
    })
    .refine((file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype), {
      message: 'Only JPEG, PNG, or WEBP files are allowed',
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'Image must be less than 5MB',
    }),
});

export const profileSchema = z.object({
  age: z.number().min(0, 'Age must be a positive number'),
  gender: z.string().min(2).max(10),
  height: z.number().min(0),
  weight: z.number().min(0),
  targetWeight: z.number().min(0),
});

export const questionnaireSchema = z.object({
  medicalBackground: z.object({
    takingMedications: z.boolean(),
    medicationsList: z.array(z.string()).optional(),
    takingSupplements: z.boolean(),
    supplementsList: z.array(z.string()).optional(),
    allergies: z.array(z.string()),
    pastConditions: z.array(z.string()),
    specificConcerns: z.string().optional(),
    medicalConditions: z.array(z.string()),
    isAnyPastCondition: z.boolean(),
    isAnyHealthConcern: z.boolean(),
  }),
  lifestyleHabits: z.object({
    energyLevels: z.nativeEnum(EnergyLevelCode),
    waterIntake: z.nativeEnum(WaterIntakeCode),
    sleepQualityCode: z.nativeEnum(SleepQualityCode).optional(),
    stressLevelCode: z.nativeEnum(StressLevelCode).optional(),
    consumes: z.array(z.string()),
  }),
  dietPreferences: z.object({
    diets: z.array(z.string()),
    isFoodInTolerances: z.boolean(),
    foodInTolerances: z.array(z.string()),
    isFoodDislikes: z.boolean(),
    foodDislikes: z.array(z.string()),
    dietPreferenceReligiousCode: z.string(),
    dietaryGoalCode: z.string(),
    mealFrequencyCode: z.string(),
    nutrientPreferenceCode: z.string(),
  }),
  physicalActivity: z.object({
    activityLevelCode: z.nativeEnum(ActivityLevelCode),
    exerciseFrequencyCode: z.nativeEnum(ExerciseFrequencyCode),
    fitnessGoalCode: z.nativeEnum(FitnessGoalCode),
    bodyTypeGoalCode: z.string(),
  }),
  healthGoals: z.object({
    healthOptimizationCode: z.nativeEnum(HealthOptimizationCode),
    healthMotivationCode: z.nativeEnum(HealthMotivationCode),
  }),
});

