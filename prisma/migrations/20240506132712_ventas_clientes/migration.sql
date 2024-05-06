/*
  Warnings:

  - Added the required column `clientes` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ventas` ADD COLUMN `clientes` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `direccion` VARCHAR(30) NOT NULL,
    `telefono` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ventas` ADD CONSTRAINT `Ventas_clientes_fkey` FOREIGN KEY (`clientes`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
