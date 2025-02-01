-- CreateTable
CREATE TABLE "Drug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "remoteKey" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "offerPrice" INTEGER NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Drug_remoteKey_key" ON "Drug"("remoteKey");
