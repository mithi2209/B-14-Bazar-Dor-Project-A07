


export function formatBanglaWords(text: string | undefined) {

  if (text === undefined || text === null) {

    return "";
  }

  const translations: Record<string, string> = {
    chal: "চাল",
    dal: "ডাল",
    tel: "তেল",
    mach : "মাছ" ,
    sobji: "সবজি",
    mangsho: "মাংস",
    "dim-dui":  "ডিম-দুধ",
    mosla : "মসলা",
  };

  return translations[text] || text;
}