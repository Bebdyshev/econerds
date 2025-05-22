export function detectLanguage(text: string): "ru" | "en" | "unknown" {
    const russianPattern = /[а-яА-ЯёЁ]/
    const englishPattern = /[a-zA-Z]/
  
    let russianChars = 0
    let englishChars = 0
  
    for (const char of text) {
      if (russianPattern.test(char)) {
        russianChars++
      } else if (englishPattern.test(char)) {
        englishChars++
      }
    }
  
    if (russianChars > englishChars) {
      return "ru"
    } else if (englishChars > russianChars) {
      return "en"
    } else {
      return "unknown"
    }
  }
  