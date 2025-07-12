export interface MedicalBackground {
    takingMedications: boolean;
    medicationsList?: string[];
    takingSupplements: boolean;
    supplementsList?: string[];
    allergies: string[];
    pastConditions: string[];
    specificConcerns?: string;
  }
  
  export interface LifestyleHabits {
    energyLevels: 'low' | 'moderate' | 'high';
    waterIntake: 'Less than 1 liter' | '1-2 liters' | '2-3 liters' | 'More than 3 liters';
    consumes: {
      alcohol: boolean;
      caffeine: boolean;
      nicotine: boolean;
    };
  }
  
  export interface DietPreferences {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    otherRestrictions?: string;
  }
  
  export interface PhysicalActivity {
    exerciseFrequency: string;
    exerciseTypes: string[];
    dailyStepCount: number;
  }
  
  export interface HealthGoals {
    weightLoss: boolean;
    muscleGain: boolean;
    improvedEnergy: boolean;
    betterSleep: boolean;
    biohackingGoals?: string;
  }
  
  export interface QuestionnaireInput {
    medicalBackground: MedicalBackground;
    lifestyleHabits: LifestyleHabits;
    dietPreferences: DietPreferences;
    physicalActivity: PhysicalActivity;
    healthGoals: HealthGoals;
  }
  