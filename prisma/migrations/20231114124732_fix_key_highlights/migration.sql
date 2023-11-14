/*
  Warnings:

  - You are about to drop the column `highligths` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "highligths",
ADD COLUMN     "highlights" TEXT[];
