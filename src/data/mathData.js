// Dino Math Data Generator for Phase 2 & Phase 3

export const MATH_ACTIVITIES = {
  addition: {
    id: 'addition',
    title: 'ADDITION',
    subtitle: 'Add the Dinosaurs',
    icon: '➕',
    dinoEmoji: '🦖',
    color: '#6BCB77'
  },
  subtraction: {
    id: 'subtraction',
    title: 'SUBTRACTION',
    subtitle: 'Take Away Dinosaurs',
    icon: '➖',
    dinoEmoji: '🦕',
    color: '#FF8FAB'
  },
  multiplication: {
    id: 'multiplication',
    title: 'MULTIPLICATION',
    subtitle: 'Dino Groups',
    icon: '✖️',
    dinoEmoji: '🐊',
    color: '#4F7CFF'
  },
  division: {
    id: 'division',
    title: 'DIVISION',
    subtitle: 'Share Dino Nests',
    icon: '➗',
    dinoEmoji: '🥚',
    color: '#FF9F43'
  },
  mixedMath: {
    id: 'mixedMath',
    title: 'MIXED MATH',
    subtitle: 'Brain Challenge',
    icon: '🧠',
    dinoEmoji: '🌋',
    color: '#9C27B0'
  }
};

export const MATH_LEVELS = {
  easy: {
    id: 'easy',
    title: 'EASY',
    icon: '🟢',
    description: 'Numbers 1–5 / Beginner'
  },
  medium: {
    id: 'medium',
    title: 'MEDIUM',
    icon: '🟡',
    description: 'Numbers 1–10 / Intermediate'
  },
  challenge: {
    id: 'challenge',
    title: 'CHALLENGE',
    icon: '🔵',
    description: 'Numbers 1–20 / Advanced'
  }
};

// Generate 3 unique answer choices (correct + 2 distractors)
function generateChoices(correctAnswer) {
  const choices = [correctAnswer];
  while (choices.length < 3) {
    // Generate distractor within +/- 3 of correct answer, min 0
    const offset = (Math.random() < 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
    const distractor = Math.max(0, correctAnswer + offset);
    if (!choices.includes(distractor)) {
      choices.push(distractor);
    }
  }
  // Shuffle choices
  return choices.sort(() => Math.random() - 0.5);
}

// Generate an Addition question
export function generateAddition(level) {
  let num1, num2;
  if (level === 'easy') {
    // Numbers 1-5 sum <= 6
    num1 = Math.floor(Math.random() * 4) + 1; // 1-4
    num2 = Math.floor(Math.random() * 3) + 1; // 1-3
  } else if (level === 'medium') {
    // Numbers up to 10 sum <= 10
    num1 = Math.floor(Math.random() * 6) + 2; // 2-7
    num2 = Math.floor(Math.random() * (10 - num1)) + 1;
  } else {
    // Challenge: up to 20
    num1 = Math.floor(Math.random() * 10) + 5; // 5-14
    num2 = Math.floor(Math.random() * 8) + 2;  // 2-9
  }

  const answer = num1 + num2;
  return {
    type: 'addition',
    symbol: '+',
    num1,
    num2,
    answer,
    choices: generateChoices(answer),
    speechText: `${num1} plus ${num2}`,
    visualType: 'addition_dinos',
    dinoEmoji: '🦖'
  };
}

// Generate a Subtraction question (NO negative answers!)
export function generateSubtraction(level) {
  let num1, num2;
  if (level === 'easy') {
    // 2-1 to 5-3
    num1 = Math.floor(Math.random() * 4) + 2; // 2 to 5
    num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 1 to num1-1
  } else if (level === 'medium') {
    // up to 10
    num1 = Math.floor(Math.random() * 6) + 5; // 5 to 10
    num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
  } else {
    // up to 20
    num1 = Math.floor(Math.random() * 10) + 10; // 10 to 19
    num2 = Math.floor(Math.random() * 8) + 2;
  }

  const answer = num1 - num2;
  return {
    type: 'subtraction',
    symbol: '-',
    num1,
    num2,
    answer,
    choices: generateChoices(answer),
    speechText: `${num1} minus ${num2}`,
    visualType: 'subtraction_dinos',
    dinoEmoji: '🦕'
  };
}

// Generate a Multiplication question (taught as GROUPS)
export function generateMultiplication(level) {
  let groups, groupSize;
  if (level === 'easy') {
    groups = 2;
    groupSize = Math.floor(Math.random() * 5) + 1; // 1 to 5
  } else if (level === 'medium') {
    groups = Math.floor(Math.random() * 2) + 3; // 3 or 4
    groupSize = Math.floor(Math.random() * 5) + 1; // 1 to 5
  } else {
    groups = Math.floor(Math.random() * 2) + 5; // 5 or 6
    groupSize = Math.floor(Math.random() * 5) + 1; // 1 to 5
  }

  const answer = groups * groupSize;
  return {
    type: 'multiplication',
    symbol: '×',
    num1: groups,
    num2: groupSize,
    answer,
    choices: generateChoices(answer),
    speechText: `${groups} times ${groupSize}`,
    visualType: 'multiplication_groups',
    groupLabel: `${groups} groups of ${groupSize}`,
    dinoEmoji: '🐊'
  };
}

// Generate a Division question (exact division only, NO remainders!)
export function generateDivision(level) {
  let total, divisor, answer;
  if (level === 'easy') {
    // Simple divisions: 2/1, 4/2, 6/3, 8/2, 8/4, 10/2, 6/2
    divisor = Math.floor(Math.random() * 3) + 1; // 1 to 3
    answer = Math.floor(Math.random() * 4) + 1;  // 1 to 4
  } else if (level === 'medium') {
    // 12/2, 12/3, 12/4, 15/3, 16/4, 18/3, 20/4
    divisor = Math.floor(Math.random() * 3) + 2; // 2 to 4
    answer = Math.floor(Math.random() * 4) + 3;  // 3 to 6
  } else {
    // 15 to 30 exact divisions
    divisor = Math.floor(Math.random() * 4) + 2; // 2 to 5
    answer = Math.floor(Math.random() * 5) + 4;  // 4 to 8
  }

  total = divisor * answer;
  return {
    type: 'division',
    symbol: '÷',
    num1: total,
    num2: divisor,
    answer,
    choices: generateChoices(answer),
    speechText: `${total} divided by ${divisor}`,
    visualType: 'division_nests',
    groupLabel: `${total} dinos shared in ${divisor} nests`,
    dinoEmoji: '🦕'
  };
}

// Generate a Mixed Math question
export function generateMixedMath(level) {
  let allowedTypes = ['addition', 'subtraction'];
  if (level === 'medium') {
    allowedTypes = ['addition', 'subtraction', 'multiplication'];
  } else if (level === 'challenge') {
    allowedTypes = ['addition', 'subtraction', 'multiplication', 'division'];
  }

  const selectedType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  if (selectedType === 'addition') return generateAddition(level);
  if (selectedType === 'subtraction') return generateSubtraction(level);
  if (selectedType === 'multiplication') return generateMultiplication(level);
  return generateDivision(level);
}

// Master question generator with non-repeat logic
export function generateMathQuestion(activityId, level, lastQuestionKey = '') {
  let q;
  let attempts = 0;
  do {
    if (activityId === 'addition') q = generateAddition(level);
    else if (activityId === 'subtraction') q = generateSubtraction(level);
    else if (activityId === 'multiplication') q = generateMultiplication(level);
    else if (activityId === 'division') q = generateDivision(level);
    else q = generateMixedMath(level);

    attempts++;
  } while (`${q.type}-${q.num1}-${q.num2}` === lastQuestionKey && attempts < 10);

  q.key = `${q.type}-${q.num1}-${q.num2}`;
  return q;
}
