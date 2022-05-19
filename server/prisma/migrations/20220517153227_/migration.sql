/*
  Warnings:

  - You are about to drop the column `user_id` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_user_id_fkey`;

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `user_id`,
    ADD COLUMN `project_user` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_project_user_fkey` FOREIGN KEY (`project_user`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
