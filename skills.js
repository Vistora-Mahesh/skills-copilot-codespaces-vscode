function calculteSkillLevel(skill) {
  const skillLevels = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  return skillLevels[skill] || 0;
}