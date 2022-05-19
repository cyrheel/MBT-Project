/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Ticket` DROP FOREIGN KEY `Ticket_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `_CommentToUser` DROP FOREIGN KEY `_CommentToUser_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_ProjectToUser` DROP FOREIGN KEY `_ProjectToUser_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_TicketToUser` DROP FOREIGN KEY `_TicketToUser_ibfk_2`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_CommentToUser` MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_ProjectToUser` MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_TicketToUser` MODIFY `B` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TicketToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommentToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
