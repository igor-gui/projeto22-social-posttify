/*
  Warnings:

  - You are about to drop the `media` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "media";

-- CreateTable
CREATE TABLE "medias" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medias_pkey" PRIMARY KEY ("id")
);
