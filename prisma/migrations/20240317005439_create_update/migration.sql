-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_username_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;
