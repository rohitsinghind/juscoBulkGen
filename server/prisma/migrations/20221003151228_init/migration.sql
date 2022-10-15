-- CreateTable
CREATE TABLE `customer` (
    `id` VARCHAR(191) NOT NULL,
    `application_no` VARCHAR(191) NOT NULL,
    `customer_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `salutation` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `mobile_no` VARCHAR(191) NOT NULL,
    `email_id` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `document_type_1` VARCHAR(191) NOT NULL,
    `document_no_1` VARCHAR(191) NOT NULL,
    `document_file_name_1` VARCHAR(191) NOT NULL,
    `document_type_2` VARCHAR(191) NOT NULL,
    `document_no_2` VARCHAR(191) NOT NULL,
    `document_file_name_2` VARCHAR(191) NOT NULL,
    `document_type_3` VARCHAR(191) NOT NULL,
    `document_no_3` VARCHAR(191) NOT NULL,
    `document_file_name_3` VARCHAR(191) NOT NULL,
    `billing_estb_name` VARCHAR(191) NOT NULL,
    `billing_street` VARCHAR(191) NOT NULL,
    `billing_zone` VARCHAR(191) NOT NULL,
    `billing_area` VARCHAR(191) NOT NULL,
    `billing_locality` VARCHAR(191) NOT NULL,
    `billing_postal_code` VARCHAR(191) NOT NULL,
    `billing_city` VARCHAR(191) NOT NULL,
    `billing_region` VARCHAR(191) NOT NULL,
    `billing_country` VARCHAR(191) NOT NULL,
    `pickup_estb_name` VARCHAR(191) NOT NULL,
    `pickup_street` VARCHAR(191) NOT NULL,
    `pickup_zone` VARCHAR(191) NOT NULL,
    `pickup_area` VARCHAR(191) NOT NULL,
    `pickup_locality` VARCHAR(191) NOT NULL,
    `pickup_postal_code` VARCHAR(191) NOT NULL,
    `pickup_city` VARCHAR(191) NOT NULL,
    `pickup_region` VARCHAR(191) NOT NULL,
    `pickup_country` VARCHAR(191) NOT NULL,
    `daily_wastage` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `auth` VARCHAR(191) NOT NULL,
    `application_status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `customer_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `application_no` VARCHAR(191) NOT NULL,
    `id` VARCHAR(191) NOT NULL,
    `entry_date` VARCHAR(191) NOT NULL,
    `mod_date` VARCHAR(191) NOT NULL,
    `mod_by` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sms` (
    `id` VARCHAR(191) NOT NULL,
    `flag` VARCHAR(191) NOT NULL,
    `sms` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sms_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
