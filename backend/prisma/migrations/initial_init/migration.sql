-- CreateTable
CREATE TABLE "user_dashboard" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "bio" TEXT,
    "skills" TEXT[],
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "user_dashboard_pkey" PRIMARY KEY ("id")
);

-- You now have a baseline for your current database schema. To make further changes to your database schema, you can update your Prisma schema and use prisma migrate dev to apply the changes to your database.