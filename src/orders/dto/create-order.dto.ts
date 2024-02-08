import { Type } from "class-transformer";
import { ArrayNotEmpty, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator";

export class CreateOrderDto {
    @ArrayNotEmpty()
    @ValidateNested({each:true})
    @Type(() => OrdemItemDto)
    items: OrdemItemDto[];

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    card_hash: string;

}


export class OrdemItemDto{
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    quantity: number;

    @MaxLength(36)
    @IsString()
    product_id: string;
}
