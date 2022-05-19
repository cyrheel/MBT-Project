/*
  Warnings:

  - You are about to drop the column `ticket_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_ticket_id_fkey`;

-- DropForeignKey
ALTER TABLE `Ticket` DROP FOREIGN KEY `Ticket_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_user_id_fkey`;

-- AlterTable
ALTER TABLE `Comment` MODIFY `modified_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `ticket_id`,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `end_time` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `user_id`,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `estimated_time` INTEGER NULL,
    MODIFY `spent_time` INTEGER NULL,
    MODIFY `status` VARCHAR(255) NULL,
    MODIFY `labels` VARCHAR(255) NULL,
    MODIFY `priority` VARCHAR(255) NULL,
    MODIFY `difficulty` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `UserProject` MODIFY `user_id` INTEGER NULL,
    MODIFY `project_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `ProjectTicket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NULL,
    `ticket_id` INTEGER NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserProject` ADD CONSTRAINT `UserProject_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProject` ADD CONSTRAINT `UserProject_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTicket` ADD CONSTRAINT `ProjectTicket_ticket_id_fkey` FOREIGN KEY (`ticket_id`) REFERENCES `Ticket`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
