/*
  Warnings:

  - You are about to drop the column `creadeAt` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `creadeAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `creadeAt` on the `work` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "creadeAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "creadeAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "work" DROP COLUMN "creadeAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
