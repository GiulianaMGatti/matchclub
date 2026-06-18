import { createContext, useContext, useEffect, useState } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState(() => {
    const storedReservations = localStorage.getItem("matchclub_reservations");
    return storedReservations ? JSON.parse(storedReservations) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "matchclub_reservations",
      JSON.stringify(reservations)
    );
  }, [reservations]);

  const addReservation = (reservationData) => {
    const newReservation = {
      id: Date.now(),
      code: `MC-${Date.now()}`,
      user: reservationData.user,
      email: reservationData.email,
      club: reservationData.club,
      sport: reservationData.sport,
      date: reservationData.date,
      time: reservationData.time,
      status: "Pendiente",
      paymentStatus: "Pendiente",
      createdAt: new Date().toISOString(),
    };

    setReservations((prevReservations) => [
      ...prevReservations,
      newReservation,
    ]);

    localStorage.setItem(
      "matchclub_last_reservation",
      JSON.stringify(newReservation)
    );
  };

  const cancelReservation = (reservationId) => {
    setReservations((prevReservations) =>
      prevReservations.map((reservation) =>
        reservation.id === reservationId
          ? {
            ...reservation,
            status: "Cancelada",
            paymentStatus: "No aplica",
          }
          : reservation
      )
    );
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        addReservation,
        cancelReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservations() {
  return useContext(ReservationContext);
}

export { ReservationProvider, useReservations };