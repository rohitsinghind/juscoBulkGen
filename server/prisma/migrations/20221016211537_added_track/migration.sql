-- CreateTable
CREATE TABLE `tack` (
    `lastApplicationNo` INTEGER NOT NULL,

    UNIQUE INDEX `tack_lastApplicationNo_key`(`lastApplicationNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
