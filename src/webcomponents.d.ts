declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["ui5-button"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { disabled?: boolean };
      ["ui5-label"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string };
      ["ui5-calendar"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        onSelectedDatesChange?: (e: CustomEvent<{ dates: number[] }>) => void;
      };
    }
  }
}

export {};
