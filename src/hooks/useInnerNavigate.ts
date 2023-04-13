import { EOption } from "@/data/types";
import { useState } from "react";

export const useInnerNavigate = () => {
  const [isRoster, setRoster] = useState(true);
  const [isStats, setStats] = useState(false);
  const [isSchedule, setSchedule] = useState(false);

  const setActive = (el: EOption) => {
    setRoster(el === EOption.ROSTER);
    setStats(el === EOption.STATS);
    setSchedule(el === EOption.SCHEDULE);
  }

  return {isRoster, isStats, isSchedule, setActive}
}
