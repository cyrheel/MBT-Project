/*
  Warnings:

  - The primary key for the `ProjectTicket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProjectTicket` table. All the data in the column will be lost.
  - The primary key for the `UserProject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserProject` table. All the data in the column will be lost.
  - Made the column `project_id` on table `ProjectTicket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ticket_id` on table `ProjectTicket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `ProjectTicket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `UserProject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_id` on table `UserProject` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `ProjectTicket` DROP FOREIGN KEY `ProjectTicket_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectTicket` DROP FOREIGN KEY `ProjectTicket_ticket_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectTicket` DROP FOREIGN KEY `ProjectTicket_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_user_id_fkey`;

-- AlterTable
ALTER TABLE `ProjectTicket` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `project_id` INTEGER NOT NULL,
    MODIFY `ticket_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`project_id`, `ticket_id`, `user_id`);

-- AlterTable
ALTER TABLE `UserProject` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `project_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `project_id`);

-- AddForeignKey
ALTER TABLE `UserProject` ADD CONSTRAINT `UserProject_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProject` ADD CONSTRAINT `UserProject_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_ticket_id_fkey` FOREIGN KEY (`ticket_id`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
