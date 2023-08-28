-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);
