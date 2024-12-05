// This is a basic IBAN validation algorithm

export function validateIBAN(iban: string): boolean {
  // Remove spaces and convert to uppercase
  const standardizedIBAN = iban.replace(/[\s]/g, "").toUpperCase();

  // Check overall length (min 15, max 34 characters)
  if (standardizedIBAN.length < 15 || standardizedIBAN.length > 34) {
    return false;
  }

  // Basic structure validation
  const basicStructureRegex = /^[A-Z]{2}\d{2}[A-Z0-9]+$/;
  if (!basicStructureRegex.test(standardizedIBAN)) {
    return false;
  }

  // Move the first 4 characters to the end
  const rearrangedIBAN =
    standardizedIBAN.slice(4) + standardizedIBAN.slice(0, 4);

  // Convert letters to numbers (A=10, B=11, ..., Z=35)
  const convertedIBAN = rearrangedIBAN
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      return code >= 65 && code <= 90 ? (code - 55).toString() : char;
    })
    .join("");

  // Perform mod-97 operation in chunks
  let remainder = 0;
  for (let i = 0; i < convertedIBAN.length; i += 7) {
    remainder = parseInt(remainder + convertedIBAN.slice(i, i + 7), 10) % 97;
  }

  // Check if remainder is 1 (valid IBAN)
  return remainder === 1;
}
