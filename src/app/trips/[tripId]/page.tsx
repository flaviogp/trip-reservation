import { prisma } from "@/lib/prisma";
import React from "react";
import TripHeader from "./components/TripHeader";
import Tripreservation from "./components/Tripreservation";
import TripDescription from "@/app/components/TripDescription";
import TripHighlights from "@/app/components/TripHighlights";

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
      <TripDescription description={trip.description} />
      <TripHighlights highlights={trip.highlights} />
    </div>
  );
}

export default TripDetails;
