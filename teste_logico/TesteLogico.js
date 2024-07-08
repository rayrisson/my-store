/**
 *
 * @param {string} ransomNote
 * @param {string} magazine
 */
const canConstruct = (ransomNote, magazine) => {
  if (magazine < ransomNote) return false;

  for (const char of ransomNote) {
    if (!magazine.includes(char)) {
      return false;
    }

    magazine = magazine.replace(char, "");
  }

  return true;
};

console.log("Resultado 'a' e 'b': " + canConstruct("a", "b"));
console.log("Resultado 'aa' e 'ab': " + canConstruct("aa", "ab"));
console.log("Resultado 'aa' e 'aab': " + canConstruct("aa", "aab"));
