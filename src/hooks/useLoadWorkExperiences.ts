import { useState, useEffect } from "react";
import axios from "axios";
import { WorkExperience } from "@/components";

/**
 * Custom hook to load work experiences from a JSON file (/data/work-experiences.json).
 */
export function useLoadWorkExperiences() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch work experiences from the JSON file
  useEffect(() => {
    axios
      .get("/data/work-experiences.json")
      .then((response) => {
        setWorkExperiences(response.data.workExperiences || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading work experiences:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return {
    workExperiences,
    isLoading,
    error,
  };
}
