/*
  Warnings:

  - You are about to drop the `tack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tack`;

-- CreateTable
CREATE TABLE `track` (
    `id` INTEGER NOT NULL,
    `lastApplicationNo` INTEGER NOT NULL,

    UNIQUE INDEX `track_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
