import { Calendar } from "@ui5/webcomponents-react";

export function CalenderUI5() {
  return (
    <Calendar
      onSelectedDatesChange={(e) => {
        e.detail.dates.forEach((d) => {
          alert(new Date(d * 1000));
        });
      }}
    />
  );
}
