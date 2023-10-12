-- CreateTable
CREATE TABLE "profiles" (
    "id" UUID NOT NULL,
    "Name" TEXT,
    "bio" TEXT,
    "skills" TEXT[],
    "email" VARCHAR NOT NULL,
    "phone_number" DECIMAL,
    "username" TEXT NOT NULL,
    "Expertise" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friends" (
    "id" UUID NOT NULL,
    "uid1" UUID,
    "uid2" UUID,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "profiles"("email");
