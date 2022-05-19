/*
  Warnings:

  - You are about to drop the column `author` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `member_assigned` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_user_id_fkey`;

-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `author`,
    ADD COLUMN `user_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `Project` MODIFY `user_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `member_assigned`;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
