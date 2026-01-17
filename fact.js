// healthyFacts.js

const healthyFacts = [
  "🥗 Eating a colorful diet (fruits & veggies) can reduce the risk of chronic diseases.",
  "💧 Drinking water first thing in the morning boosts metabolism and wakes up your body.",
  "🏃 Just 20–30 minutes of daily exercise improves mood, heart health, and brain function.",
  "😴 Sleeping 7–8 hours per night strengthens immunity and improves memory.",
  "🧘 Meditation or mindfulness for 5–10 minutes daily reduces stress and increases focus.",
  "🚶 Walking after meals helps digestion and regulates blood sugar levels.",
  "🌞 Sunlight exposure in the morning boosts Vitamin D and improves mood naturally.",
  "📵 Limiting screen time reduces eye strain, improves sleep, and enhances productivity.",
  "🪥 Good hygiene habits like brushing, flossing, and washing hands prevent infections.",
  "😄 Practicing gratitude daily improves mental health, happiness, and reduces anxiety."
];

// function to show random fact
function showHealthyFact() {
  const fact = healthyFacts[Math.floor(Math.random() * healthyFacts.length)];
  const el = document.getElementById('todayFact');
  if(el) el.textContent = fact;
}

// call the function on page load
showHealthyFact();
