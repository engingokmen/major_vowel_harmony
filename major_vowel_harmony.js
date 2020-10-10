const hardVowels = [`a`, `ı`, `o`, `u`];
const softVowels = [`e`, `i`, `ö`, `ü`];

const isHasMajorVowelHarmony = (word) => {
  let charBelongsToHardVowels = 0;
  let charBelongsToSoftVowels = 0;
  //string into array and check char belongs to which group
  word.split("").forEach((char) => {
    if (hardVowels.includes(char)) {
      ++charBelongsToHardVowels;
      return;
    } else if (softVowels.includes(char)) {
      ++charBelongsToSoftVowels;
      return;
    } else return;
  });
  return charBelongsToHardVowels === 0 || charBelongsToSoftVowels === 0;
};

export default isHasMajorVowelHarmony;
