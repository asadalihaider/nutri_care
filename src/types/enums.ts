export enum EnergyLevelCode {
  LOW = 'LOW',
  MODERATE = 'MOD',
  HIGH = 'HIGH'
}

export enum WaterIntakeCode {
  LESS_THAN_1L = 'LT1',       // Less than 1 liter
  ONE_TO_TWO_L = '12L',       // 1-2 liters
  TWO_TO_THREE_L = '23L',     // 2-3 liters
  MORE_THAN_3L = 'MT3',       // More than 3 liters
}

export enum SubstanceConsumptionCode {
  ALCOHOL = 'ALC', 
  CAFFEINE = 'CAF', 
  NICOTINE = 'NIC', 
  RECREATIONAL_DRUGS = 'DRG'
}
export enum ActivityLevelCode {
  SEDENTARY = 'SED',
  LIGHTLY_ACTIVE = 'LGT',
  MODERATELY_ACTIVE = 'MOD',
  VERY_ACTIVE = 'VRY'
}

export enum ExerciseFrequencyCode {
  RARELY = 'RAR',
  ONE_TO_TWO_TIMES = '1-2',
  THREE_TO_FOUR_TIMES = '3-4',
  FIVE_OR_MORE_TIMES = '5+'
}


export enum FitnessGoalCode {
  WEIGHT_LOSS = 'WL',
  MUSCLE_GAIN = 'MG',
  ENDURANCE = 'END',
  FLEXIBILITY = 'FLX',
  OVERALL_FITNESS = 'OF'
}

export enum BodyTypeGoalCode {
  LEAN_AND_TONED = 'LT',
  MUSCULAR_AND_STRONG = 'MUS',
  SLIM_AND_FIT = 'SLIM',
  CURVY_AND_HEALTHY = 'CURVY',
  ATHLETIC_AND_ENDURANCE_FOCUSED = 'ATH',
  BALANCED_AND_PROPORTIONAL = 'BAL',
  REHABILITATION_AND_RECOVERY = 'RR'
}

export enum HealthOptimizationCode {
  PHYSICAL_ENDURANCE = 'PE',
  MENTAL_CLARITY = 'MC',
  SLEEP_QUALITY = 'SQ',
  IMMUNE_SUPPORT = 'IS',
  ENERGY_LEVELS = 'EL'
}


export enum HealthMotivationCode {
  ACHIEVING_PERSONAL_GOALS = 'APG',
  IMPROVING_DAILY_PERFORMANCE = 'IDP',
  LONG_TERM_WELLNESS = 'LTW',
  FAMILY_OR_PERSONAL_RELATIONSHIPS = 'FPR'
}

export enum DietCode {
  TRADITIONAL = 'TRD',     // Traditional diet
  VEGAN = 'VGN',           // Vegan diet
  VEGETARIAN = 'VEG',      // Vegetarian diet
  PESCATARIAN = 'PSC',     // Pescatarian diet
  KETOGENIC = 'KETO',      // Ketogenic diet
  PALEO = 'PAL',           // Paleo diet
  GLUTEN_FREE = 'GLF',     // Gluten-free diet
}

export enum NutrientPreferenceCode {
  HIGH_PROTEIN = 'HP',
  LOW_CARB = 'LC',
  FIBER_RICH = 'FR',
  HEART_HEALTHY = 'HH',
  IMMUNE_BOOSTING = 'IB'
}


export enum MealFrequencyCode {
  ONE_TO_TWO_MEALS = 'ONE_TWO',
  THREE_MEALS = 'THREE',
  FOUR_TO_FIVE_MEALS = 'FOUR_FIVE',
  SIX_PLUS_MEALS = 'SIX_PLUS'
}

export enum DietaryGoalCode {
  WEIGHT_LOSS = 'WL',
  MUSCLE_GAIN = 'MG',
  INCREASED_ENERGY = 'IE',
  IMPROVED_DIGESTION = 'ID',
  GENERAL_WELLNESS = 'GW'
}

export enum DietPreferenceCode {
  HALAL = 'HAL',
  KOSHER = 'KOS',
  HINDU_VEGETARIAN = 'HVEG',
  BUDDHIST_VEGETARIAN = 'BVEG',
  NO_PREFERENCE = 'NOPREF'
}