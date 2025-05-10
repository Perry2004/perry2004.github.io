import { WorkExperience } from "@/components/pages/WorkExperiences";
import { useMemo } from "react";

/**
 * Parse the given date string to a comparable number.
 * @param dateStr
 * @returns
 */
function parseWorkDate(dateStr: string): number {
  if (dateStr === "Present") {
    // Present should be the most recent date possible
    return Infinity;
  }

  const [month, yearStr] = dateStr.split(" ");
  const year = parseInt(yearStr);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = months.findIndex((m) => month.startsWith(m));

  //   return a number so that it is comparable
  return year * 100 + monthIndex;
}

/**
 * Hook to sort work experiences by date (most recent first)
 * @param experiences - Array of work experiences to sort
 * @returns Array of sorted work experiences
 */
export function useSortWorkExperiences(
  experiences: WorkExperience[] | undefined,
): WorkExperience[] {
  return useMemo(() => {
    if (!experiences) return [];

    return [...experiences].sort((a, b) => {
      // Compare end dates first (most recent end date comes first)
      const endDateA = parseWorkDate(a.endDate);
      const endDateB = parseWorkDate(b.endDate);

      if (endDateA !== endDateB) {
        return endDateB - endDateA; // Descending order
      }

      // If end dates are the same, compare start dates
      const startDateA = parseWorkDate(a.startDate);
      const startDateB = parseWorkDate(b.startDate);

      return startDateB - startDateA; // Descending order
    });
  }, [experiences]);
}
