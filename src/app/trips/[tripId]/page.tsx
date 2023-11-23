import { prisma } from "@/lib/prisma";
import React from "react";
import TripHeader from "./components/TripHeader";
import Tripreservation from "./components/Tripreservation";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({ where: { id: tripId } });
  return trip;
};

async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      {/* Reserva  */}
      <Tripreservation trip={trip} />
    </div>
  );
}

export default TripDetails;
