/*
  Warnings:

  - A unique constraint covering the columns `[application_no]` on the table `customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customer_id]` on the table `customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `customer_application_no_key` ON `customer`(`application_no`);

-- CreateIndex
CREATE UNIQUE INDEX `customer_customer_id_key` ON `customer`(`customer_id`);
