import { UserProfile, Questionnaire } from '@prisma/client';

interface NutritionPromptInput {
  profile: UserProfile;
  questionnaire: Questionnaire;
}

export function getNutritionPlanPrompt({ profile, questionnaire }: NutritionPromptInput): string {
  return `
You are a certified nutritionist AI. Generate a personalized 7-day nutrition plan based on the following user data:

🧑‍💼 Personal Info:
- Age: ${profile.age}
- Gender: ${profile.gender}
- Height: ${profile.height} cm
- Weight: ${profile.weight} kg
- Target Weight: ${profile.targetWeight} kg

🏥 Medical Background:
${JSON.stringify(questionnaire.medicalBackground, null, 2)}

💧 Lifestyle & Habits:
${JSON.stringify(questionnaire.lifestyleHabits, null, 2)}

🥗 Diet Preferences:
${JSON.stringify(questionnaire.dietPreferences, null, 2)}

🏋️ Physical Activity:
${JSON.stringify(questionnaire.physicalActivity, null, 2)}

🎯 Health & Biohacking Goals:
${JSON.stringify(questionnaire.healthGoals, null, 2)}

Respond with a JSON array of 7 objects, one per day. Each object must include:
- day: (e.g. "Monday")
- breakfast
- lunch
- snack
- dinner

Format:

[
  {
    "day": "Monday",
    "breakfast": "Oatmeal with banana slices and chia seeds + green tea",
    "lunch": "Grilled chicken breast, quinoa salad with cherry tomatoes, cucumber, and olive oil",
    "snack": "A small handful of almonds",
    "dinner": "Baked salmon, steamed broccoli, and brown rice"
  },
  ...
]
`.trim();
}
