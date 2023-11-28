"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export interface TripReservationProps {
  trip: Trip;
}
export interface TripReservationForm {
  guests: number;
  startDate?: Date | null;
  endDate?: Date | null;
}

function Tripreservation({ trip }: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    return data;
  };
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: { value: true, message: "Data inicial obrigatória." },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              placeholderText="Data de inico"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              error={!!errors.startDate}
              errorMessage={errors.startDate?.message}
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: { value: true, message: "Data final obrigatória." },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              placeholderText="Data final"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              error={!!errors.endDate}
              errorMessage={errors.endDate?.message}
            />
          )}
        />
      </div>
      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatorio.",
          },
        })}
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total:</p>
        <p className="font-medium text-sm text-primaryDarker">R$2500</p>
      </div>
      <div className="pb-10 border-b border-grayLighter w-full">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
}

export default Tripreservation;
