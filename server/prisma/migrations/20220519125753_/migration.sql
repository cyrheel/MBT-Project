/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `B` on the `_CommentToUser` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `B` on the `_ProjectToUser` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `B` on the `_TicketToUser` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `_CommentToUser` DROP FOREIGN KEY `_CommentToUser_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_ProjectToUser` DROP FOREIGN KEY `_ProjectToUser_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_TicketToUser` DROP FOREIGN KEY `_TicketToUser_ibfk_2`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_CommentToUser` MODIFY `B` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `_ProjectToUser` MODIFY `B` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `_TicketToUser` MODIFY `B` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `_ProjectToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TicketToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommentToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
