import { DarkModeContext } from "../utilities/darkModeContext";

export interface Entry {
  id?: string;
  title: string;
  description: string;
  created_at: Date | string;
  scheduled_at: Date | string | null;
}
export type EntryContextType = {
  entries: Entry[];
  saveEntry: (entry: Entry) => void;
  updateEntry: (id: string, entryData: Entry) => void;
  deleteEntry: (id: string) => void;
};
export type DarkModeContextType = {
  darkMode:Boolean;
  toggleDarkMode: (darkMode: Boolean) => void;
}


