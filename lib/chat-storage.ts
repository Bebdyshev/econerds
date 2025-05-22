import type { Message } from "@/lib/types"

const STORAGE_KEY_PREFIX = "culturology_chat_"

export function saveChatHistory(cultureName: string, messages: Message[]): void {
  if (typeof window === "undefined") return

  try {
    const storableMessages = messages.map((msg) => ({
      ...msg,
      audioUrl: undefined,
      timestamp: msg.timestamp.toISOString(),
    }))

    localStorage.setItem(`${STORAGE_KEY_PREFIX}${cultureName.toLowerCase()}`, JSON.stringify(storableMessages))
  } catch (error) {
    console.error("Error saving chat history:", error)
  }
}

export function loadChatHistory(cultureName: string): Message[] {
  if (typeof window === "undefined") return []

  try {
    const storedData = localStorage.getItem(`${STORAGE_KEY_PREFIX}${cultureName.toLowerCase()}`)
    if (!storedData) return []

    const parsedData = JSON.parse(storedData)
    return parsedData.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp), 
    }))
  } catch (error) {
    console.error("Error loading chat history:", error)
    return []
  }
}

export function clearChatHistory(cultureName: string): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${cultureName.toLowerCase()}`)
  } catch (error) {
    console.error("Error clearing chat history:", error)
  }
}
