/*
  Warnings:

  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Publications" DROP CONSTRAINT "Publications_mediaId_fkey";

-- DropTable
DROP TABLE "Media";

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Publications" ADD CONSTRAINT "Publications_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
