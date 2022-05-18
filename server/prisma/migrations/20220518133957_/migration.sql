/*
  Warnings:

  - You are about to drop the `UserProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserProject` DROP FOREIGN KEY `UserProject_user_id_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `projectId` INTEGER NULL;

-- DropTable
DROP TABLE `UserProject`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
