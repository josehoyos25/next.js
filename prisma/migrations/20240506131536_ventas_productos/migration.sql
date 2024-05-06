/*
  Warnings:

  - Added the required column `producto` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ventas` ADD COLUMN `producto` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ventas` ADD CONSTRAINT `Ventas_producto_fkey` FOREIGN KEY (`producto`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
