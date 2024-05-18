export interface Option<T> {
  id: string; // unique id for comparison
  label: string; // display value
  value: T; // anything
}

export interface AutoCompleteProps<T> {
  value?: string;
  label: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  fetchSuggestions: (query: string) => Promise<Option<T>[]>;
  minLength?: number;
  onOptionSelected: (option: Option<T>) => void;
  debounceTimeout?: number;
  inputClassName?: string;
  labelClassName?: string;
  popoverClassName?: string;
  optionClassName?: string;
  spinnerClassName?: string;
  errorClassName?: string;
}
