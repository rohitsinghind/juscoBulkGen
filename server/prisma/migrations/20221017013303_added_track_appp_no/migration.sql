/*
  Warnings:

  - You are about to drop the `track` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `track`;

-- CreateTable
CREATE TABLE `trackApplicationNo` (
    `id` INTEGER NOT NULL,
    `lastApplicationNo` INTEGER NOT NULL,

    UNIQUE INDEX `trackApplicationNo_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
