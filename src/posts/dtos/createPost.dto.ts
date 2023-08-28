import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty({
        message: "title field is required"
    })
    title: string;

    @IsString()
    @IsNotEmpty({
        message: "Text field is required"
    })
    text: string;

    @IsString()
    @IsUrl()
    image: string;
}