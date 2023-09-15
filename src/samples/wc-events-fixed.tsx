import "@ui5/webcomponents/dist/Calendar.js";
import { useEffect, useRef } from "react";

export function CalenderUI5() {
  const ref = useRef<any>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const handler = (e: CustomEvent<{ dates: number[] }>) => {
      e.detail.dates.forEach((d) => {
        alert(new Date(d * 1000));
      });
    };

    // bind the event handler after the component has mounted
    if (currentRef) {
      currentRef.addEventListener("selected-dates-change", handler);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("selected-dates-change", handler);
      }
    };
  }, []);

  return <ui5-calendar ref={ref} />;
}
