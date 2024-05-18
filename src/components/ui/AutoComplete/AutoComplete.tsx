import { type ChangeEvent, forwardRef, useRef, useState } from "react";

import { useDebounce } from "use-debounce";

import { useFetchSuggestions } from "@/components/ui/AutoComplete/AutoComplete.hooks";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/Popover";
import { Spinner } from "@/components/ui/Spinner/Spinner";
import { cn } from "@/utils/cn";

import type { AutoCompleteProps, Option } from "./AutoComplete.types";

// TODO: refactor and clean up
const AutoCompleteComponent = <T,>(
  {
    label,
    fetchSuggestions,
    minLength,
    value,
    setValue,
    inputClassName,
    labelClassName,
    popoverClassName,
    spinnerClassName,
    onOptionSelected,
  }: AutoCompleteProps<T>,
  ref: React.Ref<HTMLInputElement>,
) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const localInputRef = useRef<HTMLInputElement>(null);

  const inputRef = ref || localInputRef;
  const isControlled = value !== undefined && setValue !== undefined;

  const currentValue = isControlled ? value : internalValue;
  const handleValueChange = isControlled ? setValue : setInternalValue;

  const popoverRef = useRef<HTMLDivElement>(null);

  const [debouncedValue] = useDebounce(currentValue, 800);

  const {
    data: suggestions,
    isLoading,
    isFetching,
    isError,
  } = useFetchSuggestions(debouncedValue, fetchSuggestions, minLength);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    handleValueChange(newValue);
    if (newValue === "") {
      setIsPopoverOpen(false);
    } else {
      setIsPopoverOpen(true);
    }
  };

  const handleOptionClick = (option: Option<T>) => {
    handleValueChange(option.label);
    setIsPopoverOpen(false);
    onOptionSelected(option);
  };

  const handleInputBlur = () => {
    // Delay the blur handling to allow for relatedTarget detection
    setTimeout(() => {
      // If the focus moves to the popover or stays within the input, do not close the popover
      const target = document.activeElement;
      if (
        popoverRef.current?.contains(target) ||
        localInputRef.current?.contains(target)
      ) {
        localInputRef.current?.focus();
        return;
      }

      if (!suggestions?.some(option => option.label === currentValue)) {
        handleValueChange("");
      }

      setIsPopoverOpen(false);
    }, 100);
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    option: Option<T>,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleOptionClick(option);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex(prevIndex =>
        prevIndex === null || prevIndex === suggestions!.length - 1
          ? 0
          : prevIndex + 1,
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex(prevIndex =>
        prevIndex === null || prevIndex === 0
          ? suggestions!.length - 1
          : prevIndex - 1,
      );
    } else if (
      event.key === "Enter" &&
      highlightedIndex !== null &&
      suggestions
    ) {
      handleOptionClick(suggestions[highlightedIndex]);
    }
  };

  return (
    <div className="relative w-full">
      <Popover open={isPopoverOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <FloatingLabelInput
              ref={inputRef}
              label={label}
              className={inputClassName}
              labelClassName={labelClassName}
              value={currentValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              aria-autocomplete="list"
              aria-controls="autocomplete-listbox"
              aria-expanded={isPopoverOpen}
              aria-haspopup="listbox"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          ref={popoverRef}
          className={cn(
            `
              mt-2 rounded-sm border-0 bg-white/[.95] p-0 shadow-lg

              sm:min-w-[530px]
            `,
            popoverClassName,
          )}
        >
          {isLoading && (
            <div
              className={cn(
                `flex items-center justify-center gap-3 py-[5px]`,
                spinnerClassName,
              )}
            >
              Loading...
              <Spinner />
            </div>
          )}

          {!isLoading && !isFetching && !suggestions?.length ? (
            <div
              className={`
                px-6 py-[5px]

                sm:text-base
              `}
            >
              {isError ? "Network Error" : "No result found"}
            </div>
          ) : null}

          {suggestions?.map((item, index) => (
            <div
              onClick={() => handleOptionClick(item)}
              key={item.id}
              onKeyDown={event => handleOptionKeyDown(event, item)}
              role="option"
              aria-selected={item.label === currentValue}
              tabIndex={0}
              className={cn(
                `
                  cursor-pointer px-6 py-[5px] text-sm

                  first:rounded-t-sm first:pt-2

                  last:rounded-b-sm last:pb-2

                  hover:bg-gray-200/[.6]

                  sm:text-base
                `,
                highlightedIndex === index ? "bg-gray-200/[.6]" : "",
              )}
            >
              {item.label}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const AutoComplete = forwardRef(AutoCompleteComponent) as <T>(
  props: AutoCompleteProps<T> & { ref?: React.Ref<HTMLInputElement> },
) => ReturnType<typeof AutoCompleteComponent>;
