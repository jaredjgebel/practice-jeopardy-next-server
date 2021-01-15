import React, { useState } from "react";
import DayPickerInput from "react-day-picker";
import { Flex } from "@chakra-ui/react";
import "react-day-picker/lib/style.css";

function DayPicker({ children }) {
  const modifiers = {
    allDays: {
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    },
  };

  const modifiersStyles = {
    allDays: {
      backgroundColor: "transparent",
    },
  };

  const [selectedDay, setSelectedDay] = useState();

  return (
    <Flex direction="column">
      {selectedDay && (
        <p>
          Clues <span>{children}</span> {`${selectedDay.toLocaleDateString()}`}
        </p>
      )}
      <DayPickerInput
        value={selectedDay}
        month={new Date(2000, 0, 1)}
        onDayClick={(day) => setSelectedDay(day)}
        dayPickerProps={{
          selectedDays: selectedDay,
        }}
        style={{ height: "310px" }}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
    </Flex>
  );
}

export default DayPicker;
