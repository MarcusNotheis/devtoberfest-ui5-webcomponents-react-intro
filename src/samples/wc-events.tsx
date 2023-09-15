import "@ui5/webcomponents/dist/Calendar.js";

export function CalenderUI5() {
  return (
    <ui5-calendar
      onSelectedDatesChange={(e) => {
        e.detail.dates.forEach((d) => alert(new Date(d * 1000)));
      }}
    />
  );
}